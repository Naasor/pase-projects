students = ['ama','kofi','kwame']

# for student in students :
#     if(student == 'ama'):
#         print(student+ ' is a girl')
#     else:
#         if(len(student)>4):
#             print(student+ ' is a boy and has long name')
#         else:
#             print(student+ ' is a boy and has short name')

counter = 0
while counter < len(students):
    student = students[counter]
    if(student == 'ama'):
        print(student + ' is a girl')
    else:
        if(len(student)>4):
            print(student+ ' is a boy and has long name')
        else:
            print(student+ ' is a boy and has short name')
    counter += 1

    