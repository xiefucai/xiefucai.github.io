# C语言结构体（struct）常见使用方法

今天复习一下struct，顺便挖掘一下以前没注意的小细节：

基本定义：**结构体**，通俗讲就像是打包封装，把一些有共同特征（比如同属于某一类事物的属性，往往是某种业务相关属性的聚合）的变量封装在内部，通过一定方法访问修改内部变量。


结构体定义：

第一种：只有结构体定义
``` cpp
struct stuff{
        char job[20];
        int age;
        float height;
};
```
第二种：附加该结构体类型的“结构体变量”的初始化的结构体定义
``` cpp
//直接带变量名Huqinwei
struct stuff{
        char job[20];
        int age;
        float height;
}Huqinwei;
```
也许初期看不习惯容易困惑，其实这就相当于：
``` cpp
struct stuff{
        char job[20];
        int age;
        float height;
};
struct stuff Huqinwei;
```
第三种：如果该结构体你只用一个变量Huqinwei，而不再需要用
``` cpp
struct stuff yourname;
```
去定义第二个变量。
那么，附加变量初始化的结构体定义还可进一步简化出第三种：
``` cpp
struct{
        char job[20];
        int age;
        float height;
}Huqinwei;
```
把结构体名称去掉，这样更简洁，不过也不能定义其他同结构体变量了——至少我现在没掌握这种方法。

## 结构体变量及其内部成员变量的定义及访问：
绕口吧？要分清结构体变量和结构体内部成员变量的概念。
就像刚才的第二种提到的，结构体变量的声明可以用：
``` cpp
struct stuff yourname;
```
其成员变量的定义可以随声明进行：
``` cpp
struct stuff Huqinwei = {"manager",30,185};
```
也可以考虑结构体之间的赋值：
``` cpp
struct stuff faker = Huqinwei;
//或  struct stuff faker2;
// faker2 = faker;
打印，可见结构体的每一个成员变量一模一样
```
如果不使用上边两种方法，那么成员数组的操作会稍微麻烦（用for循环可能好点）
``` cpp
Huqinwei.job[0] = 'M';
Huqinwei.job[1] = 'a';
Huqinwei.age = 27;
Huqinwei.height = 185;
```
结构体成员变量的访问除了可以借助符号"."，还可以用"->"访问（下边会提）。
