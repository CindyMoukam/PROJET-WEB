DROP TABLE users IF EXISTS;
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Surname VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Privilege INT NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);

CREATE TABLE events (
	id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    status INT NOT NULL,
    Price INT NOT NULL DEFAULT 0,
    Start_time Date NOT NULL,
    End_time Date NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE image (
	id INT NOT NULL AUTO_INCREMENT,
    Path VARCHAR(255) NOT NULL,
    id_user INT  NOT NULL,
    id_event INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_event) REFERENCES events(id)
);

CREATE TABLE category (
	id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE idea (
	id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE likes (
	id INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    id_image INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_image) REFERENCES image(id)
);

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Category VARCHAR(255) NOT NULL,
    Price INT NOT NULL DEFAULT 0,
    Quantity INT NOT NULL DEFAULT 0,
    Sold INT NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
);



CREATE TABLE notification (
	id INT NOT NULL AUTO_INCREMENT,
    Content VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    dates DATE NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE product_table (
	id INT NOT NULL AUTO_INCREMENT,
    id_product INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_product) REFERENCES products(id)
);

CREATE TABLE basket (
	id INT NOT NULL AUTO_INCREMENT,
    id_product_table INT NOT NULL,
    id_user INT NOT NULL,
    Price INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_product_table) REFERENCES product_table(id),
    FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE comments (
	id INT NOT NULL AUTO_INCREMENT,
    Content VARCHAR(255) NOT NULL,
    id_user INT NOT NULL,
    dates DATE NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE basket_archive (
	id INT NOT NULL AUTO_INCREMENT,
    id_product_table INT NOT NULL,
    id_user INT NOT NULL,
    Price INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_product_table) REFERENCES product_table(id),
    FOREIGN KEY(id_user) REFERENCES users(id)
);