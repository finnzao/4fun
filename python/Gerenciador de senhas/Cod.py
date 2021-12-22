
import sqlite3

master_pass= "masterword321"

senha_master=input("Password of enter the program: ")

if senha_master !=master_pass:#test pass
    print("Password invalid")
    exit()

conn= sqlite3.connect('passwords.db')#caso nao tive um arquivo com esse nome vai fazer um arquivo com esse nome

cursor=conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS users(
    service TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);
''')

def menu():
    print("*"*30)
    print("1 : new password"+" "*13+"*")
    print("2 : List of saves services"+" "*3+"*")
    print("3 : Recover Password"+" "*9+"*")
    print("0 : Exit"+" "*21+"*")



def view_services():
    cursor.execute('''
        SELECT service FROM users;
    ''')
    for service in cursor.fetchall():#procurar por cada linha os resultados,e retorna eles em uma lista
        print(service)

def insert_password(service,username,password):
    cursor.execute(f'''
        INSERT INTO users(service,username,password)
        VALUES ('{service}','{username}','{password}')
    ''')
    conn.commit()

def get_password(service):
    cursor.execute(f'''
    SELECT username,password FROM users
    WHERE service= '{service}'
    ''')
    
    if cursor.rowcount == 0:
        print("Not found")

    else:
        for user in cursor.fetchall():
            print(user)

    

while True:
    menu()
    op= input(str("Select: "))
    if op not in ['1','2','3','0']:
        print("Opção invalida")
        continue

    if op =='0':
        print("Exit of program...")
        break

    elif op=='1':
        service=input("Name of service?")
        username=input("Name of username?")
        password=input("Password:")
        insert_password(service,username,password)

    elif op =="2":
        view_services()

    elif op == "3":
        service=input("Name of service:")
        get_password(service)



conn.close()
