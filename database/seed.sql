INSERT INTO users
  (email, password_digest, birthday)
VALUES
  ('testing@g.co', '$2b$12$Ky51py24IUAjv0grl81GhOpoeQvBWWiMKTf06wMacmD/7kW5aPMUK', 'april');

INSERT INTO categories
  (categories, img_url)
VALUES
  ('Camping', 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1050&q=80'),
  ('Hiking', 'https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80'),
  ('Skydiving', 'https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c908728ab8df488716426562f8c8e4&auto=format&fit=crop&w=967&q=80'),
  ('Fishing', 'https://images.unsplash.com/photo-1449158672805-f0deda6782ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2f894314238c035a86957377bb53418&auto=format&fit=crop&w=967&q=80'),
  ('Running', 'https://images.unsplash.com/photo-1489899386118-f4b931edf195?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7564d72d8ce8a1d80da4f40e97b9fe2c&auto=format&fit=crop&w=2468&q=80'),
  ('Rock Climbing', 'https://images.unsplash.com/photo-1485975789056-ad4d1fd01742?ixlib=rb-0.3.5&s=bf127145cfd81d267399a1029b864ab1&auto=format&fit=crop&w=2468&q=80');

INSERT INTO states
  (state)
VALUES
  ('Alabama'),
  ('Alaska'),
  ('Arizona'),
  ('Arkansas'),
  ('California'),
  ('Colorado'),
  ('Connecticut'),
  ('Delaware'),
  ('Florida'),
  ('Georgia'),
  ('Hawaii'),
  ('Idaho'),
  ('Illinois'),
  ('Indiana'),
  ('Iowa'),
  ('Kansas'),
  ('Kentucky'),
  ('Louisiana'),
  ('Maine'),
  ('Maryland'),
  ('Massachusetts'),
  ('Michigan'),
  ('Minnesota'),
  ('Mississippi'),
  ('Missouri'),
  ('Montana'),
  ('Nebraska'),
  ('Nevada'),
  ('New Hampshire'),
  ('New Jersey'),
  ('New Mexico'),
  ('New York'),
  ('North Carolina'),
  ('Norht Dakota'),
  ('Ohio'),
  ('Oklahoma'),
  ('Oregon'),
  ('Pennsylvannia'),
  ('Rhode Island'),
  ('South Carolina'),
  ('South Dakota'),
  ('Tennessee'),
  ('Texas'),
  ('Utah'),
  ('Vermont'),
  ('Virginia'),
  ('Washington'),
  ('West Virginia'),
  ('Wisconsin'),
  ('Wyoming');

INSERT INTO products
  (user_id, name, description, price, category_id, stock, img_url, state_id)
 VALUES
  (null, 'Red bull parachute', 'This is a top of the line parachute made in the USA.', 1500, 3, 6, 'https://images.unsplash.com/photo-1502140949210-c106017ebc42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=725829001755845b214325368f7623e7&auto=format&fit=crop&w=500&q=60', 20),
  (null, 'Fishermans´rod', 'This is a heavy duty fishing rod, perfect for heavy fish such as marlin, swordfish, and groupers', 1000, 4, 22, 'https://images.unsplash.com/photo-1505850557988-b858c0aec076?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57cd5fac2965304833b7d040bcb8cacb&auto=format&fit=crop&w=500&q=60', 48),
  (null, 'Appalachian tent', 'This is a reliable camping tent designed for temperate regions', 3000, 1, 10, 'https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1050&q=80', 2),
  (null, 'Nike pro', 'These shoes are designed for jogging lovers.', 100, 5, 40, 'https://c1.staticflickr.com/6/5603/15479116842_7a5be55f66_b.jpg', 16),
  (null, 'Hike pro', 'The perfect backpack to go hicking', 500, 2, 13, 'https://images.unsplash.com/photo-1502457604705-a48b4fbcd8e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83d39dab752775194f606850fea80a5b&auto=format&fit=crop&w=500&q=60', 21),
  (null, 'Compass', 'You''ll never lose your way again', 35, 2, 10, 'https://images.unsplash.com/photo-1495153003981-0945a0a25e46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba7a4dab60f4798f4c2718376426a2f3&auto=format&fit=crop&w=500&q=60', 15),
  (null, 'Hiking Bundle', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 200, 2, 6, 'https://images.unsplash.com/photo-1485809052957-5113b0ff51af?ixlib=rb-0.3.5&s=34b8c58599a2d67f3a41d74f3bffc31d&auto=format&fit=crop&w=933&q=80', 36),
  (null, 'Hiking Stove', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 70, 2, 2, 'https://images.unsplash.com/photo-1522041350204-22285237eeca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=48c42ceda315abc730f5adc2382a6cf2&auto=format&fit=crop&w=1050&q=80', 10),
  (null, 'Hiking Tent', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 159, 2, 16, 'https://images.unsplash.com/photo-1523860798709-4c1b6afeb5b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95cea494c152e3556b28c1e112e9fd49&auto=format&fit=crop&w=500&q=60', 20),
  (null, 'Rucksack', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 75, 2, 20, 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=062233acc6b8c96a29a7d06ebf6e2e23&auto=format&fit=crop&w=500&q=60', 38),
  (null, 'Thermos', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 40, 2, 30, 'https://images.unsplash.com/photo-1444012236767-1b471c68781c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6430266932689062b30b3959de436ef0&auto=format&fit=crop&w=500&q=60', 3),
  (null, 'Carabiner', 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    10, 6, 25, 'https://images.unsplash.com/photo-1472235477785-4a74ac750010?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0fb6579cb8c6bc227e5393b2d113c19&auto=format&fit=crop&w=500&q=60', 30),
  (null, 'Rock Climbing Shoes', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 50, 6, 13, 'https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=15c636347bb2d92ecf540fb59838fccd&auto=format&fit=crop&w=500&q=60', 16),
  (null, 'Rock Climbing Tent', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 337, 6, 4, 'https://images.unsplash.com/photo-1522031153701-b3eba74004e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78d51c49f731c56ff8bf3bd2cf2d3301&auto=format&fit=crop&w=500&q=60', 49),
  (null, 'Rope', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 150, 6, 13, 'https://images.unsplash.com/photo-1517172770828-dd2c3b6db6b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e7fac3f453de2fb7634ffcc6f3874e9&auto=format&fit=crop&w=500&q=60', 12),
  (null, 'Utility Belt', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 130, 6, 8, 'https://images.unsplash.com/photo-1485871800663-71856dc09ec4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30fbf13db3437cefedb26fdf3c42d46b&auto=format&fit=crop&w=500&q=60', 31),
  (null, 'GoPro', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 200, 3, 17, 'https://images.unsplash.com/photo-1503072181166-d28c4e6c1b3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6e8e8815a475d6141758e393c32c0caa&auto=format&fit=crop&w=500&q=60', 13),
  (null, 'Helmet', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 410, 3, 6, 'https://images.unsplash.com/photo-1510235519896-1d6427d9e383?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ae41cc652bf1437accc008e3178fdee&auto=format&fit=crop&w=500&q=60', 18),
  (null, 'Parachute', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 1300, 3, 10, 'https://images.unsplash.com/photo-1497772814742-c2e35d51d508?ixlib=rb-0.3.5&s=a8c6918ad6f37c742ce4c86e68786873&auto=format&fit=crop&w=500&q=60', 21),
  (null, 'Skydiving Pod', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 50, 3, 20, 'https://images.unsplash.com/photo-1516182466-8c5f17faaa3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a2d35691a6329efef0d4d5f41d4533f5&auto=format&fit=crop&w=500&q=60', 22),
  (null, 'Wingsuit', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 1880, 3, 3, 'https://images.unsplash.com/photo-1481590911518-b0e5019ca2d2?ixlib=rb-0.3.5&s=f69d0f2e3c6f073bafd3e24c27146c09&auto=format&fit=crop&w=500&q=60', 7);
