# a = 0
# for i in range(10):
#     print(i)
#     a+=i
    

# print(a)
a = 0
b = 0
for i in range(1,101):
    if i % 7 == 0:
        print(i)
        a += 1
        b += i
print(a,b)