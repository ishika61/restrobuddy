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
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `subcategory` (
  `restaurantid` int(100) DEFAULT NULL,
  `categoryid` int(100) DEFAULT NULL,
  `subcategoryid` int(11) NOT NULL AUTO_INCREMENT,
  `subcategoryname` varchar(45) DEFAULT NULL,
  `icon` text,
  `createdat` text,
  `updatedat` text,
  PRIMARY KEY (`subcategoryid`),
  KEY `sc_fk_ct_idx` (`categoryid`),
  KEY `sc_fk_rb_idx` (`restaurantid`),
  CONSTRAINT `sc_fk_ct` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sc_fk_rb` FOREIGN KEY (`restaurantid`) REFERENCES `restaurant` (`restaurantid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (13,5,13,'Burgers','f20124a7-98a6-4e3f-a4ad-2c9f50dce344.png','Tue May 06 2025 19:43:36 GMT+0530 (India Standard Time)','Tue May 06 2025 19:43:36 GMT+0530 (India Standard Time)'),(13,5,14,'Fingers','44ab9ffa-bcca-4ce7-97c0-9b89ed13bb42.jpg','Tue May 06 2025 19:44:31 GMT+0530 (India Standard Time)','Tue May 06 2025 19:44:31 GMT+0530 (India Standard Time)'),(13,5,15,'Rolls','4330ec52-c1a3-4742-949f-c3b3dbb42fd7.jpg','Tue May 06 2025 19:47:58 GMT+0530 (India Standard Time)','Tue May 06 2025 19:47:58 GMT+0530 (India Standard Time)'),(14,6,16,'Burgers','d920dbae-4c5d-495e-9a1d-70b5870224a2.png','Tue May 06 2025 20:36:29 GMT+0530 (India Standard Time)','Tue May 06 2025 20:36:29 GMT+0530 (India Standard Time)'),(14,6,17,'SubWrap','db6d9d18-6a21-46a8-965d-f0f4ea5f9bf0.jpg','Tue May 06 2025 20:39:46 GMT+0530 (India Standard Time)','Tue May 06 2025 20:39:46 GMT+0530 (India Standard Time)'),(14,6,18,'Toasties','32e78267-a128-459a-a6fe-eec65ccc6ea4.jpg','Tue May 06 2025 20:43:57 GMT+0530 (India Standard Time)','Tue May 06 2025 20:43:57 GMT+0530 (India Standard Time)'),(14,6,19,'Patty','dc7ea890-a9c8-4e86-af45-6c0888050b56.jpg','Tue May 06 2025 20:45:45 GMT+0530 (India Standard Time)','Tue May 06 2025 20:45:45 GMT+0530 (India Standard Time)'),(15,6,20,'Buger','f03921db-acd2-4ec6-9880-8ad7621169d0.png','Thu May 15 2025 00:09:08 GMT+0530 (India Standard Time)','Thu May 15 2025 00:09:08 GMT+0530 (India Standard Time)'),(15,6,21,'Wraps','6616469e-e9f5-47aa-b8ba-ba2fdf07280a.jpg','Thu May 15 2025 00:29:51 GMT+0530 (India Standard Time)','Thu May 15 2025 00:29:51 GMT+0530 (India Standard Time)'),(16,8,22,'Rolls','c381d908-972c-49ec-ad7f-cb5df9e54205.jpg','Thu May 15 2025 02:00:28 GMT+0530 (India Standard Time)','Thu May 15 2025 02:00:28 GMT+0530 (India Standard Time)'),(16,8,23,'Roasted Food','1c59f92d-4d43-4c47-bd5d-8a34c2d3cc51.jpg','Thu May 15 2025 02:11:04 GMT+0530 (India Standard Time)','Thu May 15 2025 02:11:04 GMT+0530 (India Standard Time)'),(16,8,24,'Soups','a2ba3d11-63af-4779-a03b-4e5af75482bf.jpg','Thu May 15 2025 02:11:27 GMT+0530 (India Standard Time)','Thu May 15 2025 02:11:27 GMT+0530 (India Standard Time)'),(16,10,25,'Indian Food','33200435-3a4e-4488-b43f-272dd7b90594.jpg','Thu May 15 2025 02:16:00 GMT+0530 (India Standard Time)','Thu May 15 2025 02:16:00 GMT+0530 (India Standard Time)'),(16,10,26,'Continental Food','c7efe150-6f0c-4299-9177-94abc37a3165.jpg','Thu May 15 2025 02:16:51 GMT+0530 (India Standard Time)','Thu May 15 2025 02:16:51 GMT+0530 (India Standard Time)'),(16,11,27,'Pasta','41e51d0f-d839-48ab-bd2c-394e9cc7b516.jpg','Thu May 15 2025 02:19:57 GMT+0530 (India Standard Time)','Thu May 15 2025 02:19:57 GMT+0530 (India Standard Time)'),(16,11,28,'Noodles','0cbdd2d8-350c-4dda-ad57-c0dd8ad1d8aa.jpg','Thu May 15 2025 02:20:15 GMT+0530 (India Standard Time)','Thu May 15 2025 02:20:15 GMT+0530 (India Standard Time)'),(16,12,29,'Sweets','1e5be4d8-f3c0-4e02-8f57-ea537050469c.jpg','Thu May 15 2025 02:24:17 GMT+0530 (India Standard Time)','Thu May 15 2025 02:24:17 GMT+0530 (India Standard Time)'),(16,12,30,'Ice Cream and Cake ','05016b66-b96e-438f-9352-3a106713fc93.jpg','Thu May 15 2025 02:24:55 GMT+0530 (India Standard Time)','Thu May 15 2025 02:24:55 GMT+0530 (India Standard Time)'),(16,13,31,'Tea and Coffee','0edd9d8c-28cd-4759-a050-0992ecc9cd33.jpg','Thu May 15 2025 02:28:12 GMT+0530 (India Standard Time)','Thu May 15 2025 02:28:12 GMT+0530 (India Standard Time)'),(16,13,32,'Juices and  Shakes ','68f768ab-06af-4f54-b532-d9802a81892a.jpg','Thu May 15 2025 02:28:52 GMT+0530 (India Standard Time)','Thu May 15 2025 02:28:52 GMT+0530 (India Standard Time)'),(13,18,33,'Pizza','e997363a-f4e2-47f3-a281-5bd824c63bf4.jpg','Sun Aug 31 2025 22:03:48 GMT+0530 (India Standard Time)','Sun Aug 31 2025 22:03:48 GMT+0530 (India Standard Time)'),(13,43,34,'past','5a5470e1-215f-446c-8606-dc4b52c90bc0.jpg','Sun Aug 31 2025 22:31:27 GMT+0530 (India Standard Time)','Sun Aug 31 2025 22:31:27 GMT+0530 (India Standard Time)'),(13,41,35,'ladu','526ec520-3e81-4c86-a8a9-fc26a24b6576.jpg','Sun Aug 31 2025 22:32:58 GMT+0530 (India Standard Time)','Sun Aug 31 2025 22:32:58 GMT+0530 (India Standard Time)'),(13,41,36,'barfi','f5e6c01e-62b6-4489-afa1-ca2d030243a9.jpg','Sun Aug 31 2025 22:33:34 GMT+0530 (India Standard Time)','Sun Aug 31 2025 22:33:34 GMT+0530 (India Standard Time)');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
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
