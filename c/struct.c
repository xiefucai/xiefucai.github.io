#include <stdio.h>
#include <stdlib.h>
//接口
#ifndef Interface
#define Interface struct
#endif
//类
#ifndef Class
#define Class struct
#endif
//抽象形状类
Class Shape;
typedef Class Shape shape;
//抽象形状类的方法声明
shape* Shape(int edges);
int shape_getEdges(shape *);
int shape_getArea(void);
void _Shape(shape *);
//三角形类
Class Triangle;
typedef Class Triangle triangle;
//三角形类的方法声明
triangle * Triangle(int bottom, int height);
int triangle_getEdges(triangle *);
int triangle_getArea(triangle *);
void _Triangle(triangle *);
//矩形类
Class Rectangle;
typedef Class Rectangle rectangle;
//矩形类的方法声明
rectangle * Rectangle(int bottom, int height);
int rectangle_getEdges(rectangle *);
int rectangle_getArea(rectangle *);
void _Rectangle(rectangle *);
//抽象形状类实现
Class Shape
{
    int edges;
    int (*getEdges)(shape*);
    int (*getArea)(void);
};
//形状类构造函数
shape* Shape(int edges)
{
    shape * obj = (shape *) malloc(sizeof(shape));
    obj->edges = edges;
    obj->getEdges = shape_getEdges;
    obj->getArea = shape_getArea;
    return obj;
}
int shape_getEdges(shape* obj)
{
    return obj->edges;
}
int shape_getArea(void)
{
    return -1;
}
//形状类析构函数
void _Shape(shape * obj)
{
    if(obj == NULL)
        return; 
    free(obj); 
}
//三角形类实现
Class Triangle
{
    shape * super;
    int bottom;
    int height;
    int (*getEdges)(triangle *);
    int (*getArea)(triangle *);
};
//三角形类构造函数
triangle * Triangle(int bottom, int height)
{
    triangle* obj = (triangle*) malloc(sizeof(triangle));
    //调用Shape构造函数用于实现继承
    obj->super = Shape(3);
    obj->bottom = bottom;
    obj->height = height;
    obj->getEdges = triangle_getEdges;
    obj->getArea = triangle_getArea;
    return obj;
}
int triangle_getEdges(triangle * obj)
{
    return obj->super->edges;
}
int triangle_getArea(triangle * obj)
{
    return (obj->bottom * obj->height) / 2;
}
//三角形类析构函数
void _Triangle(triangle * triangle)
{
    _Shape(triangle->super);
    if(triangle == NULL)
    {
        return; 
    }
    free(triangle); 
}
//矩形类实现
Class Rectangle
{
    shape * super;
    int bottom;
    int height;
    int (*getEdges)(rectangle *);
    int (*getArea)(rectangle *);
};
//矩形类构造函数
rectangle * Rectangle(int bottom, int height)
{
    rectangle * obj = (rectangle *)malloc(sizeof(rectangle));
    //调用Shape构造函数用于实现继承
    obj->super = Shape(4);
    obj->bottom = bottom;
    obj->height = height;
    obj->getEdges = rectangle_getEdges;
    obj->getArea = rectangle_getArea;
    return obj;
}
int rectangle_getEdges(rectangle * obj)
{
    return obj->super->edges;
}
int rectangle_getArea(rectangle * obj)
{
    return (obj->bottom * obj->height);
}
//矩形类析构函数
void _Rectangle(rectangle * obj)
{
    _Shape(obj->super);
    if(obj == NULL)
    {
        return;
    }
    free(obj);
}
//测试
void main(){
    shape* shapeObj = Shape(0);
     printf("%d\n", shapeObj->getEdges(shapeObj));
    printf("%d\n", shapeObj->getArea());
    _Shape(shapeObj);
    triangle* triangleObj = Triangle(4, 5);
    printf("%d\n", triangleObj->getEdges(triangleObj));
    printf("%d\n", triangleObj->getArea(triangleObj));
    _Triangle(triangleObj);
    rectangle* rectangleObj = Rectangle(4, 5);
    printf("%d\n", rectangleObj->getEdges(rectangleObj));
    printf("%d\n", rectangleObj->getArea(rectangleObj));
    _Rectangle(rectangleObj);
}