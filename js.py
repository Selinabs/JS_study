# a = 0
# for i in range(10):
#     print(i)
#     a+=i
    

# print(a)
# a = 0
# b = 0
# for i in range(1,101):
#     if i % 7 == 0:
#         print(i)
#         a += 1
#         b += i
# print(a,b)
# 
#
#     选择排序

a = [4,76,45,3,6,34,23,89]

def about_min(t):
    print(t)
    for i in range(len(t)):
        minIndex = i
        for j in range(i,len(t)):
            if t[j] < t[minIndex]:
                minIndex = j
            b = t[minIndex]
            t[minIndex] = t[i]
            t[i] = b
    return t

x = about_min(a)
print(x)