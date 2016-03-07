#include <ctype.h>
#include <stdio.h>

void increment(int x)
{
    x = x + 1;
}

int main()
{
    int i;
    for(i = 125; i < 130; i++)
    {
        if (isascii(i))
        {
            printf("%d is an ascii character:%c\n", i, i);
        }
        else
        {
            printf("%d is not an ascii character\n", i);
        }
    }
}