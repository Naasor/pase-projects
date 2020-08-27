students = ['ama','kofi','kwame']
cars = ['Toyota','Tesla','Ford','Porshe','Kantanka']

def add(a,b):
    return a+b

def get_student_names(students):
    for student in students:
        print(student)

def get_list_of_cars(cars):
    for car in cars:
        print(car)

def student_cars(students,cars):
    counter = 0
    while counter < len(students):
        print(students[counter]+ '===>' + cars[counter])
        counter += 1

print(add(1,2))

get_student_names(students)

get_list_of_cars(cars)

student_cars(students,cars)

def get_fullname(first_name,last_name):
        return first_name + '' + last_name

fullname = get_fullname('Sandra','Amofa')

print(fullname)