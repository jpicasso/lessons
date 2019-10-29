from database import Database
from user import User

Database.initialize(database='learning', user='postgres', password='Apple2017', host='localhost')

my_user = User.load_from_db_by_email('jose@schoolofcode.me')
second_user = User('tommy@gmail.com', 'tommy', 'Smith', None)

second_user.save_to_db()

print(my_user)
print(my_user.last_name)