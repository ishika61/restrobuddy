-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: restrobuddy
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `food` (
  `restaurantid` int(11) DEFAULT NULL,
  `categoryid` int(11) DEFAULT NULL,
  `subcategoryid` int(11) DEFAULT NULL,
  `foodid` int(11) NOT NULL AUTO_INCREMENT,
  `foodname` varchar(45) DEFAULT NULL,
  `statustype` varchar(45) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `offerprice` decimal(10,0) DEFAULT NULL,
  `ingredients` varchar(100) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `icon` text,
  `createdat` text,
  `updatedat` text,
  `quantitytype` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`foodid`),
  KEY `fd_fk_fd_idx` (`restaurantid`),
  KEY `fd_fk_cte_idx` (`categoryid`),
  KEY `fd_fk_sbct_idx` (`subcategoryid`),
  CONSTRAINT `fd_fk_cte` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fd_fk_rst` FOREIGN KEY (`restaurantid`) REFERENCES `restaurant` (`restaurantid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fd_fk_sbct` FOREIGN KEY (`subcategoryid`) REFERENCES `subcategory` (`subcategoryid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (13,5,13,22,'Mac Aloo Tikki','true',40,8,'Aloo, spicies, Tickky, Paneer, Paaw, chilli, shoya shos, cheese, cream, butter','available','70331f6c-7881-49de-9b1f-b91d2541016a.jpg','2025-05-23T02:54:57.366Z','2025-05-23T02:54:57.366Z','quantity'),(13,5,13,23,'Big Mac Burger','true',125,15,'cheese','available','f3cf3f37-bbc8-4646-8590-e97e9a75bb68.jpg','2025-05-22T18:53:34.799Z','2025-05-22T18:53:34.799Z','quantity'),(13,5,13,24,' Mac Filet-o-Fish','false',200,10,'Fish, oil, chilli, fish Raffer, butter, onioun, tatmato cachup, ','available','31bef2a5-b168-4394-8122-bb70bcfa07bb.jpg','Tue May 06 2025 20:03:26 GMT+0530 (India Standard Time)','Tue May 06 2025 20:03:26 GMT+0530 (India Standard Time)',NULL),(13,5,13,25,'Mc Chicken Burger','false',250,25,'Chicken','available','c1f09c13-0baa-4f07-8eb0-b830442a49ef.jpg','Tue May 06 2025 20:05:20 GMT+0530 (India Standard Time)','Tue May 06 2025 20:05:20 GMT+0530 (India Standard Time)',NULL),(13,5,14,26,'Mexican Cheesy Fries','true',180,15,'Potato,cheese','available','1f5df9d1-f824-485e-b8ff-255a6cc34a7e.jpg','Tue May 06 2025 20:09:18 GMT+0530 (India Standard Time)','Tue May 06 2025 20:09:18 GMT+0530 (India Standard Time)',NULL),(13,5,14,27,'Classical Salted Fries','true',120,5,'Potato ','available','8814c6b5-1a66-4b6f-baf8-85ce9b00fd72.jpg','Tue May 06 2025 20:11:51 GMT+0530 (India Standard Time)','Tue May 06 2025 20:11:51 GMT+0530 (India Standard Time)',NULL),(13,5,14,28,'Piri Piri Fries','true',210,20,'Potato','available','80d037b2-03fe-40a6-8824-787e409cfa90.jpg','Tue May 06 2025 20:12:50 GMT+0530 (India Standard Time)','Tue May 06 2025 20:12:50 GMT+0530 (India Standard Time)',NULL),(13,5,15,29,'Paneer kebab Roll','true',270,40,'Paneer','available','d0fafdbb-912a-4630-9631-affbd989f913.jpg','Tue May 06 2025 20:17:42 GMT+0530 (India Standard Time)','Tue May 06 2025 20:17:42 GMT+0530 (India Standard Time)',NULL),(13,5,15,30,'Chicken kebab Roll','false',290,30,'Chicken','available','0fbaf509-b8c3-46fc-9515-1e36bce3bdff.jpg','Tue May 06 2025 20:18:31 GMT+0530 (India Standard Time)','Tue May 06 2025 20:18:31 GMT+0530 (India Standard Time)',NULL),(14,6,16,31,'Subway Chicken Burger','false',225,5,' grilled or fried chicken ','available','00e1a37c-e7a9-43cf-a1bd-9babc689b330.jpg','Wed May 07 2025 00:24:11 GMT+0530 (India Standard Time)','Wed May 07 2025 00:24:11 GMT+0530 (India Standard Time)',NULL),(14,6,16,32,'Subway Veggie Burger','true',180,0,' vegetable','available','a52b7e7e-b24a-4f89-ac2f-cf0198e4982b.jpg','Wed May 07 2025 00:25:56 GMT+0530 (India Standard Time)','Wed May 07 2025 00:25:56 GMT+0530 (India Standard Time)',NULL),(14,6,17,33,'Chicken Caesar Wrap','true',300,50,' chicken, parmesan cheese, lettuce, and Caesar dressing','available','790616c4-d8e2-4b45-9de4-23599c09655d.jpg','2025-05-06T19:14:43.883Z','2025-05-06T19:14:43.883Z',NULL),(14,6,17,34,'Subway Veggie Delite Wrap','true',250,30,'Loaded with veggies','available','cb397e1c-4358-4553-a688-12c7807da46c.jpg','Wed May 07 2025 00:32:00 GMT+0530 (India Standard Time)','Wed May 07 2025 00:32:00 GMT+0530 (India Standard Time)',NULL),(14,6,18,35,'Grilled Cheese Toastie','false',110,10,'simple sandwich with melted cheese','available','43e815b6-6fe9-4de3-852e-9c146a42d35b.jpg','Wed May 07 2025 00:35:58 GMT+0530 (India Standard Time)','Wed May 07 2025 00:35:58 GMT+0530 (India Standard Time)',NULL),(14,6,18,36,'Chicken & Cheese Toastie','false',175,15,'Grilled or crispy chicken with melted cheese','available','618fd7a0-e407-44d8-bd49-d9909b5990e2.jpg','Wed May 07 2025 00:37:45 GMT+0530 (India Standard Time)','Wed May 07 2025 00:37:45 GMT+0530 (India Standard Time)',NULL),(14,6,19,37,'Subway Panner Patty','true',150,0,'ndian cottage cheese','available','8b8fe1ee-56d5-4a02-90e0-e40a173377df.jpg','Wed May 07 2025 00:41:46 GMT+0530 (India Standard Time)','Wed May 07 2025 00:41:46 GMT+0530 (India Standard Time)',NULL),(14,6,19,38,'Chicken Patty','false',225,10,'Crispy Chicken ','available','638dc553-6621-4397-ba96-11fec4801e08.jpg','Wed May 07 2025 00:42:43 GMT+0530 (India Standard Time)','Wed May 07 2025 00:42:43 GMT+0530 (India Standard Time)',NULL),(14,6,19,39,'Veggie Patty','true',315,100,'vegetables, grains, and soy protein','available','0884ba62-a71e-48eb-b37b-621247688f47.jpg','Wed May 07 2025 00:43:53 GMT+0530 (India Standard Time)','Wed May 07 2025 00:43:53 GMT+0530 (India Standard Time)',NULL),(15,6,20,40,'Crispy Veg Burger','true',120,5,'Vegetables','available','d1fe4644-f3ff-4e55-927b-3b9163e0b51e.jpg','Thu May 15 2025 00:22:18 GMT+0530 (India Standard Time)','Thu May 15 2025 00:22:18 GMT+0530 (India Standard Time)',NULL),(15,6,20,41,'Crispy Chicken Buger','false',200,1,'Chicken,Onion,Tomato','available','c3df67d9-bbe3-42c4-80df-ea02ff677e0d.jpg','Thu May 15 2025 00:24:27 GMT+0530 (India Standard Time)','Thu May 15 2025 00:24:27 GMT+0530 (India Standard Time)',NULL),(15,6,20,42,'Whopper','false',250,0,'Cheese ,Meat,onion','available','403a334a-5158-4338-b408-0e588bbca33b.jpg','Thu May 15 2025 00:28:34 GMT+0530 (India Standard Time)','Thu May 15 2025 00:28:34 GMT+0530 (India Standard Time)',NULL),(15,6,21,43,'Eggs Wraps','false',120,10,'Fluffy Egg Patty,Vegetables','available','d0b9ce68-682f-4bc6-8fa8-c0a50c8b19fd.jpg','Thu May 15 2025 00:31:30 GMT+0530 (India Standard Time)','Thu May 15 2025 00:31:30 GMT+0530 (India Standard Time)',NULL),(15,6,21,44,'Vege Wraps','true',100,0,'Vegetables,Cheese','available','3d4686bc-3686-4c99-b957-1a933b61c460.jpg','Thu May 15 2025 00:32:12 GMT+0530 (India Standard Time)','Thu May 15 2025 00:32:12 GMT+0530 (India Standard Time)',NULL),(15,6,21,45,'Chiken Wrap','false',200,5,'Chiken ,Onion,','available','5ae349e7-c4fd-4103-8404-934e3ed5afe0.jpg','Thu May 22 2025 18:33:21 GMT+0530 (India Standard Time)','Thu May 22 2025 18:33:21 GMT+0530 (India Standard Time)','quantity');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-17 18:17:25
