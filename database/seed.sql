INSERT INTO categories
  (categories, img_url)
VALUES
  ('Camping', 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1050&q=80'),
  ('Hiking', 'https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e0d1edffbad88072bb38ac3e67dbc24&auto=format&fit=crop&w=2550&q=80'),
  ('Skydiving', 'https://images.unsplash.com/photo-1474623809196-26c1d33457cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43c908728ab8df488716426562f8c8e4&auto=format&fit=crop&w=967&q=80'),
  ('Fishing', 'https://images.unsplash.com/photo-1449158672805-f0deda6782ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2f894314238c035a86957377bb53418&auto=format&fit=crop&w=967&q=80'),
  ('Running', 'https://images.unsplash.com/photo-1489899386118-f4b931edf195?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7564d72d8ce8a1d80da4f40e97b9fe2c&auto=format&fit=crop&w=2468&q=80'),
  ('Rock Climbing', 'https://images.unsplash.com/photo-1485975789056-ad4d1fd01742?ixlib=rb-0.3.5&s=bf127145cfd81d267399a1029b864ab1&auto=format&fit=crop&w=2468&q=80');

INSERT INTO products
  (user_id, name, description, price, category_id, stock)
 VALUES
  (null, 'Red bull parachute', 'This is a top of the line parachute made in the USA.', 1500, 3, 6),
  (null, 'Fishermans´rod', 'This is a heavy duty fishing rod, perfect for heavy fish such as marlin, swordfish, and groupers', 1000, 4, 22),
  (null, 'Appalachian tent', 'This is a reliable camping tent designed for temperate regions', 3000, 1, 10),
  (null, 'Nike pro', 'These shoes are designed for jogging lovers.', 100, 5, 40),
  (null, 'Hike pro', 'The perfect backpack to go hicking', 500, 2, 13),
  (null, 'Compass', 'You''ll never lose your way again', 35, 2, 10),
  (null, 'Hiking Bundle', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 200, 2, 6),
  (null, 'Hiking Stove', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 70, 2, 2),
  (null, 'Hiking Tent', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 159, 2, 16),
  (null, 'Rucksack', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 75, 2, 20),
  (null, 'Thermos', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 40, 2, 30),
  (null, 'Carabiner', 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    10, 6, 25),
  (null, 'Rock Climbing Shoes', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 50, 6, 13),
  (null, 'Rock Climbing Tent', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 337, 6, 4),
  (null, 'Rope', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 150, 6, 13),
  (null, 'Utility Belt', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 130, 6, 8),
  (null, 'GoPro', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 200, 3, 17),
  (null, 'Helmet', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 410, 3, 6),
  (null, 'Skydiving Pod', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 50, 3, 20),
  (null, 'Wingsuit', 'Lorem ipsum dolor sit amet, consectetur adipisicing', 1880, 3, 3);

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

