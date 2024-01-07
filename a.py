T =int(input())

for test_case in range(1, T+1):
    numbers = list(map( int, input().split() ) )
    sum = 0
    for i in range(len(numbers)):
        if numbers[i]%2==1:
            sum+=numbers[i]
    print(f'#{test_case} {sum}')