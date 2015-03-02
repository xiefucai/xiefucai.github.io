$(function() {
    var __CDNPATH__ = '../',
        __APIPATH__ = '/',
        paras = {},
        dialog,
        form = $('#form')[0],
        categorys = {},
        isFirstLoaded = 0,
        getCategoryName = function(id){
            return categorys[id]['name'];
        },
        getSearchInfo = function(){
            var data={};
            if (+$(form['category']).attr('data-value')) {
                data['category'] = +$(form['category']).attr('data-value');
            }
            if (+$(form['sub_category']).attr('data-value')) {
                data['subcategory'] = +$(form['sub_category']).attr('data-value');
            }
            if ($.trim(form['id'].value)) {
                data['id'] = $.trim(form['id'].value);
            }
            if ($.trim(form['name'].value)) {
                data['name'] = $.trim(form['name'].value);
            }
            return data;
        },
        getDataByPage = function(page,callback){
            var data = {};
            data.limit = 20;
            data.index = (+page - 1) * data.limit;
            $.extend(data,getSearchInfo());

            common.ajax({
                'url': __APIPATH__ + 'product/list',
                'type': 'get',
                'data': data,
                'dataType': 'json',
                'success': function(info) {
                    var myData = info && info.data,
                        total,
                        page = +common.href.get('page') || 1;
                        console.log(info);
                    if (+info.code === 0) {
                        total = Math.ceil((+info.total||1)/(data.limit||1));
                        console.log('page',total);
                        callback(myData,{'current':page,'total':total});
                    } else if (+info.code === 401 || +info.code === 400) {
                        dialog.alert('请重新登录', function() {
                            top.jumpTo('login.html');
                        });
                    }
                },
                'error': function() {
                    dialog.alert('请求超时，请检查网络', function() {
                        //top.jumpTo('login.html');
                    });
                }
            });
        },
        redirect = function(page){
            var data = getSearchInfo();
            if (!isFirstLoaded) {
                return;
            }
            if (!isNaN(page)) {
                data['page'] = page;
            }
            location.href = '?'+$.param(data);
        },
        loadProductList = function(i){
                getDataByPage(+paras['page'] || 1,function(data,page){
                    $('#list').html(common.tmpl($('#list_tmpl').html(), {
                        'list': data,
                        'getCategoryName':function(str,i){
                            var a = str.split(','),b;
                            if (a.length > 0) {
                                b = a[0].split('_');
                                if (i === 0) {
                                    if (categorys[b[i]]) {
                                        return categorys[b[i]]['name'];
                                    }else{
                                        console.log(categorys[b[i]],b[i]);
                                        return '';
                                    }
                                }else{
                                    if (categorys[b[0]]) {
                                        return categorys[b[0]]['subCategorys'][b[1]]['name'];
                                    }else{
                                        return '';
                                    }

                                }
                            }
                            return '';
                        }
                    }));

                    if (page.total > 1) {
                        $('#page').removeClass('none').html(common.tmpl($('#page_tmpl').html(),page));
                    }else{
                        $('#page').addClass('none');
                    }
                });
                isFirstLoaded = 1;
        },
        init = function() {
            common.checkUserLogin();
            common.component.init();
            paras = common.href.get();

            $(form['id']).val(paras['id'],'').bind('change',redirect);
            $(form['name']).val(paras['name'],'').bind('change',redirect);
            $(form['category']).bind('change',function(event){
                var pid=$(event.target).attr('data-value');
                common.component.selector.setOpts.call(form['sub_category'],(function(){
                    var arr = ['<span data-value="0">不限</span>'],
                        obj = +pid?categorys[pid]['subCategorys']:{};

                    for (var id in obj) {
                        arr.push('<span data-value="'+id+'">'+obj[id]['name']+'</span>');
                    }
                    return arr.join('');
                })(),+paras['subcategory']||0);
                redirect();
            });
            $(form['sub_category']).bind('change',redirect);

            common.component.selector.setOpts.call(form['category'],(function(){
                var arr = ['<span data-value="0">不限</span>'];
                for (var id in categorys) {
                    arr.push('<span data-value="'+id+'">'+categorys[id]['name']+'</span>');
                }
                return arr.join('');
            })(),+paras['category'] || 0);

            if (+common.cookie.get('type') !== 0) {
                $('#add_layer').removeClass('none');
            }
            dialog = common.dialog(__CDNPATH__);

            common.action = {
                'edit': function(id) {
                    location.href = 'set.html?action=edit&id=' + id;
                },
                'delete': function(event,t) {
                    var id=+t.attr('data-id');
                    dialog.confirm('确定删除?', function() {
                        common.ajax({
                            'url': __APIPATH__ + 'product/delete',
                            'type': 'post',
                            'data': {
                                'id': id
                            },
                            'dataType': 'json',
                            'success': function(info) {
                                var data = info && info.data;
                                if (+info.code === 0) {
                                    dialog.alert('删除成功', function() {
                                        location.reload();
                                    });
                                }
                            },
                            'error': function() {}
                        });
                    });
                },
                'setIsSelling':function(event,t){
                    var id = t.attr('data-id'),
                        isSelling = +t.attr('data-isSelling'),
                        data = {'id':id,'is_selling':+!isSelling};

                        common.ajax({
                            'url': __APIPATH__ + 'product/update',
                            'type': 'post',
                            'data': data,
                            'dataType': 'json',
                            'success': function(info) {
                                var data = info && info.data;
                                if (+info.code === 0) {
                                    dialog.alert('修改成功',function(){
                                        location.reload();
                                    });
                                } else if (+info.code === 401 || +info.code === 400) {
                                    dialog.alert('请重新登录', function() {
                                        top.jumpTo('login.html');
                                    });
                                }
                            },
                            'error': function() {
                                dialog.alert('请求超时，请检查网络', function() {
                                    //top.jumpTo('login.html');
                                });
                            }
                        });
                },
                'search':redirect,
                'showPages':function(){
                    $('.page-nav').toggleClass('none');
                },
                'showPage':function(event,t){
                    paras.page = t.attr('data-page');
                    location.href = '?'+$.param(paras);
                }
            }

            loadProductList();
        };


    document.domain = (/\w+\.\w+$/.exec(location.hostname))[0];
    $.getScript(__CDNPATH__ + 'js/lib/common.js?__VERSION__', function(){
        common.ajax({
            'url': __APIPATH__ + 'product_category/list',
            'type': 'get',
            'data':{'limit':100,'index':0},
            'dataType': 'json',
            'success': function(info) {
                var data = info && info.data || [];
                if (+info.code === 0) {
                    for(var i=0,k=data.length;i<k;i++){
                        if (+data[i].pid === 0) {
                            categorys[data[i].id] = data[i];
                        }
                    }
                }
                for (var id in categorys) {
                    categorys[id]['subCategorys'] = {};
                    for (var i = 0,k = data.length; i < k; i++) {
                        if ((+data[i].pid === +id) && (+data[i].id !== +id)) {
                            categorys[id]['subCategorys'][data[i].id] = data[i];
                        }
                    }
                }
                init();
            },
            'error':init
        });
    });
});
