#include <stdio.h>
#include <string.h>
#include <sys/socket.h>

int iptoint( const char *ip )
{
    return ntohl( inet_addr( ip ) );
}

void inttoip( int ip_num, char *ip )
{
    strcpy( ip, (char*)inet_ntoa( htonl( ip_num ) ) );
}

int main()
{
	printf("%d\n", iptoint('172.16.0.0'));
	return 0;
}