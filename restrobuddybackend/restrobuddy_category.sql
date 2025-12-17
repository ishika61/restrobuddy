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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `restaurantid` int(100) DEFAULT NULL,
  `categoryid` int(100) NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(45) DEFAULT NULL,
  `icon` text,
  `createdat` text,
  `updatedat` text,
  PRIMARY KEY (`categoryid`),
  KEY `rb_cat_rid_idx` (`restaurantid`),
  CONSTRAINT `rb_cat_rid` FOREIGN KEY (`restaurantid`) REFERENCES `restaurant` (`restaurantid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (13,5,'Fast Food','b7e23c32-1eff-437b-a90b-0944a0eeb2d0.avif','2025-05-16T04:24:31.420Z','2025-05-16T04:24:31.420Z'),(14,6,'Fast Food','9ca3a52b-377a-497d-882c-c1f372865281.jpg','Tue May 06 2025 20:30:39 GMT+0530 (India Standard Time)','Tue May 06 2025 20:30:39 GMT+0530 (India Standard Time)'),(15,7,'Fast Food','9ac26fd0-52ba-4d83-a8b0-b486e1b5abc7.png','Tue May 06 2025 20:35:19 GMT+0530 (India Standard Time)','Tue May 06 2025 20:35:19 GMT+0530 (India Standard Time)'),(16,8,'Starters','0ce86b11-d050-48ba-ab26-e7e07c8db02a.jpg','Thu May 15 2025 01:41:25 GMT+0530 (India Standard Time)','Thu May 15 2025 01:41:25 GMT+0530 (India Standard Time)'),(16,9,' Soups','2a23e1b3-49ad-4f5b-9613-3366598fe3c7.jpg','Thu May 15 2025 01:51:48 GMT+0530 (India Standard Time)','Thu May 15 2025 01:51:48 GMT+0530 (India Standard Time)'),(16,10,'Main Course','de5c753e-fb2e-48b3-9895-172abfc494ef.jpg','Thu May 15 2025 01:52:37 GMT+0530 (India Standard Time)','Thu May 15 2025 01:52:37 GMT+0530 (India Standard Time)'),(16,11,'Pasta & Noodles','241470cd-bbf6-4247-9639-8be2e1bbfba6.jpg','Thu May 15 2025 01:53:08 GMT+0530 (India Standard Time)','Thu May 15 2025 01:53:08 GMT+0530 (India Standard Time)'),(16,12,'Desserts','5961b2ea-268c-4654-bfe6-2273b06260cc.jpg','Thu May 15 2025 01:53:40 GMT+0530 (India Standard Time)','Thu May 15 2025 01:53:40 GMT+0530 (India Standard Time)'),(16,13,'Beverages','de0ec48b-20ce-4b8e-9558-aa2cdfb4578f.jpg','Thu May 15 2025 01:54:06 GMT+0530 (India Standard Time)','Thu May 15 2025 01:54:06 GMT+0530 (India Standard Time)'),(22,14,'Sweets','349b40d5-a2a0-4798-a87e-74dd3ef22137.jpg','Wed Jul 23 2025 01:42:47 GMT+0530 (India Standard Time)','Wed Jul 23 2025 01:42:47 GMT+0530 (India Standard Time)'),(22,15,'Chaap','9805ba1b-f634-4499-91e2-b7e7478b73be.jpg','Wed Jul 23 2025 01:47:17 GMT+0530 (India Standard Time)','Wed Jul 23 2025 01:47:17 GMT+0530 (India Standard Time)'),(22,16,'South Indian','a473f546-8d4f-4189-abda-36606a190f9d.jpg','Wed Jul 23 2025 01:53:24 GMT+0530 (India Standard Time)','Wed Jul 23 2025 01:53:24 GMT+0530 (India Standard Time)'),(22,17,'Starter','971f0940-cb88-4372-8b9f-53bdf199ad98.jpg','Wed Jul 23 2025 01:55:03 GMT+0530 (India Standard Time)','Wed Jul 23 2025 01:55:03 GMT+0530 (India Standard Time)'),(22,18,'Pizza and Pasta','5c2546a6-bb32-4871-96f5-67adf49b0830.jpg','Wed Jul 23 2025 02:03:41 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:03:41 GMT+0530 (India Standard Time)'),(22,19,'Buger and Sandwiches','7122dad0-3227-4f3b-a295-8fc9b21e53c3.jpg','Wed Jul 23 2025 02:04:56 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:04:56 GMT+0530 (India Standard Time)'),(22,20,'Combos','12bebc6c-4414-4eca-ae6c-5561c8e4bfca.jpg','Wed Jul 23 2025 02:05:14 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:05:14 GMT+0530 (India Standard Time)'),(22,21,'Thali','71effde5-4647-4ede-bb14-cb3e8f4f9e26.jpg','Wed Jul 23 2025 02:05:33 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:05:33 GMT+0530 (India Standard Time)'),(22,22,'Chinees','96fc7212-5295-4283-b1cd-aad9094cf972.jpg','Wed Jul 23 2025 02:06:21 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:06:21 GMT+0530 (India Standard Time)'),(22,23,'Starter','4a7f08cc-110b-4e5b-984f-a789a92ce90a.jpg','Wed Jul 23 2025 02:06:34 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:06:34 GMT+0530 (India Standard Time)'),(22,24,'Soups','df472258-66c6-4563-bd70-0420051c8f1e.jpg','Wed Jul 23 2025 02:06:57 GMT+0530 (India Standard Time)','Wed Jul 23 2025 02:06:57 GMT+0530 (India Standard Time)'),(28,25,'Buger and Sandwiches','f67e8f28-ee33-4180-96cc-32e6de9affdd.jpg','Mon Aug 04 2025 13:27:38 GMT+0530 (India Standard Time)','Mon Aug 04 2025 13:27:38 GMT+0530 (India Standard Time)'),(17,26,'Soups','0b672147-f2c1-4ccf-9bb5-d84e88bc247e.jpg','Mon Aug 04 2025 14:19:22 GMT+0530 (India Standard Time)','Mon Aug 04 2025 14:19:22 GMT+0530 (India Standard Time)'),(18,27,'Pasta & Noodles','4cf7fe94-d5b6-4ab8-9648-048d9be49bea.jpg','Mon Aug 04 2025 14:20:44 GMT+0530 (India Standard Time)','Mon Aug 04 2025 14:20:44 GMT+0530 (India Standard Time)'),(19,28,'Desserts','0f7537fd-68c9-4d05-9968-9aadaf3781e1.jpg','Mon Aug 04 2025 14:22:43 GMT+0530 (India Standard Time)','Mon Aug 04 2025 14:22:43 GMT+0530 (India Standard Time)'),(20,29,'Combos','4989e087-c43c-48a7-81a4-a6063743aba7.jpg','Mon Aug 04 2025 16:11:41 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:11:41 GMT+0530 (India Standard Time)'),(21,30,'Pasta & Noodles','c2256837-142d-4770-a206-6ef23e4ec843.jpg','Mon Aug 04 2025 16:15:02 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:15:02 GMT+0530 (India Standard Time)'),(23,31,'Tea and Coffee','45122c7e-57ef-401f-a306-7791a6da5a37.jpg','Mon Aug 04 2025 16:16:37 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:16:37 GMT+0530 (India Standard Time)'),(24,32,'Chaap','71d1096b-a3d4-465d-a41c-9034c52cf29e.jpg','Mon Aug 04 2025 16:20:13 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:20:13 GMT+0530 (India Standard Time)'),(26,33,'cake','ece101cf-5f2b-4a7c-b697-f3879b992979.jpg','Mon Aug 04 2025 16:21:41 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:21:41 GMT+0530 (India Standard Time)'),(29,34,'Buger and Sandwiches','712ea2f7-f2a6-4ce9-86bb-27cd502fc678.jpg','Mon Aug 04 2025 16:23:00 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:23:00 GMT+0530 (India Standard Time)'),(27,35,'Chinees','369cd2b7-8ca6-4f6e-99b1-4884532948b0.jpg','Mon Aug 04 2025 16:23:25 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:23:25 GMT+0530 (India Standard Time)'),(25,36,'Indean Food','c445d1a0-9647-406e-afad-c285c7c91e6e.jpg','Mon Aug 04 2025 16:23:57 GMT+0530 (India Standard Time)','Mon Aug 04 2025 16:23:57 GMT+0530 (India Standard Time)'),(17,37,'Starters','c2a7e66c-c942-4f94-ad56-060fc699b963.jpg','Sun Aug 31 2025 21:48:38 GMT+0530 (India Standard Time)','Sun Aug 31 2025 21:48:38 GMT+0530 (India Standard Time)'),(17,38,'Soups','e211f05e-aa6a-43e8-875c-6eaa9f36a739.jpg','Sun Aug 31 2025 21:49:07 GMT+0530 (India Standard Time)','Sun Aug 31 2025 21:49:07 GMT+0530 (India Standard Time)'),(17,39,'Fast Food','b3cd1852-26ea-4fa8-9a59-b63b28a9cd71.jpg','Sun Aug 31 2025 21:49:43 GMT+0530 (India Standard Time)','Sun Aug 31 2025 21:49:43 GMT+0530 (India Standard Time)'),(17,40,'Sweets','aafa6c93-41f8-4230-aabb-d9aea0ded603.jpg','Sun Aug 31 2025 21:50:12 GMT+0530 (India Standard Time)','Sun Aug 31 2025 21:50:12 GMT+0530 (India Standard Time)'),(13,41,'Sweets','f7e70432-3992-4bc0-8fd9-2c1541d2f171.jpg','Sun Aug 31 2025 21:58:52 GMT+0530 (India Standard Time)','Sun Aug 31 2025 21:58:52 GMT+0530 (India Standard Time)'),(13,42,'Buger and Sandwiches','50f885cd-7236-4d09-9090-96700dc85596.jpg','Sun Aug 31 2025 21:59:33 GMT+0530 (India Standard Time)','Sun Aug 31 2025 21:59:33 GMT+0530 (India Standard Time)'),(13,43,'Pizza and Pasta','ad8c979f-2b01-42db-b4dd-470dd9913de9.jpg','Sun Aug 31 2025 22:00:52 GMT+0530 (India Standard Time)','Sun Aug 31 2025 22:00:52 GMT+0530 (India Standard Time)');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-17 18:17:24
