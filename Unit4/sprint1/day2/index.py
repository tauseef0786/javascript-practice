arr = [[3, 5, 6], [9, 2, 6], [3, 5, 2]]
ans = 0

# For i = 0 to 2
for i in range(3):
    if arr[0][i] % 3 == 0:
        ans += i

column = 1
# For j = 1 to 2
for j in range(1, 3):
    if arr[j][column] % 3 == 0:
        ans += j
    column -= 1

# For k = 1 to 2
for k in range(1, 3):
    if arr[2][k] % 3 == 0:
        ans += k

print(ans)
