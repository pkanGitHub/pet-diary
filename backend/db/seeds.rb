# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pet.create(name: "Micki", birth_date: "01/12/2014")

Diary.create(title: "Micki first time home", post: "She is excited exploring around the house and dooking along the way", pet_id: 1)