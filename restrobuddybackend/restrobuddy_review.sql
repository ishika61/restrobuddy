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
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `review` (
  `ratingid` int(10) NOT NULL AUTO_INCREMENT,
  `restaurantid` int(100) NOT NULL,
  `usermobile` varchar(45) NOT NULL,
  `foodrating` int(2) DEFAULT NULL,
  `deliveryrating` int(2) DEFAULT NULL,
  `dainingrating` int(2) DEFAULT NULL,
  `restaurantrating` int(2) DEFAULT NULL,
  `review` text,
  `createdat` text,
  `updatedat` text,
  PRIMARY KEY (`ratingid`),
  KEY `fk_restaurant_id_idx` (`restaurantid`),
  KEY `fk_usermobile_idx` (`usermobile`),
  KEY `usermobile` (`usermobile`),
  CONSTRAINT `fk_restaurant_id` FOREIGN KEY (`restaurantid`) REFERENCES `restaurant` (`restaurantid`),
  CONSTRAINT `usermobile` FOREIGN KEY (`usermobile`) REFERENCES `userlogin` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,13,'9826113761',5,3,5,4,'mind biloing food and nice place ','2025-08-04T19:36:20.540Z','2025-08-04T19:36:20.540Z'),(2,13,'9826113761',4,5,4,4,'nice','2025-08-04T19:40:10.129Z','2025-08-04T19:40:10.129Z'),(3,14,'9826113761',4,4,4,4,'good','2025-08-04T19:42:28.985Z','2025-08-04T19:42:28.985Z'),(4,15,'9826113761',5,5,5,5,'very goood.....','2025-08-04T19:42:55.309Z','2025-08-04T19:42:55.309Z'),(5,16,'9826113761',4,3,3,3,'very goood.....','2025-08-04T19:43:32.822Z','2025-08-04T19:43:32.822Z'),(6,17,'9826113761',5,4,4,4,'very goood.....','2025-08-04T19:43:52.430Z','2025-08-04T19:43:52.430Z'),(7,18,'9826113761',4,5,5,4,'goood.....','2025-08-04T19:44:14.819Z','2025-08-04T19:44:14.819Z'),(8,19,'9826113761',5,5,5,5,'wowww.........','2025-08-04T19:44:31.074Z','2025-08-04T19:44:31.074Z'),(9,20,'9826113761',3,3,3,3,'ok ok','2025-08-04T19:44:51.620Z','2025-08-04T19:44:51.620Z'),(10,21,'9826113761',5,4,4,5,'mind biloing food and nice place ','2025-08-04T19:45:19.811Z','2025-08-04T19:45:19.811Z'),(11,29,'9826113761',5,4,4,5,'mind biloing food and nice place ','2025-08-04T19:46:01.043Z','2025-08-04T19:46:01.043Z'),(12,28,'9826113761',4,4,4,4,'mind biloing ','2025-08-04T19:46:22.954Z','2025-08-04T19:46:22.954Z'),(13,27,'9826113761',4,3,3,4,'good','2025-08-04T19:46:41.549Z','2025-08-04T19:46:41.549Z'),(14,22,'9826113761',4,5,3,4,'good','2025-08-04T19:46:50.366Z','2025-08-04T19:46:50.366Z'),(15,23,'9826113761',5,5,5,5,'yummy.............','2025-08-04T19:47:20.668Z','2025-08-04T19:47:20.668Z'),(16,26,'9826113761',5,5,5,5,'yummy.............','2025-08-04T19:47:29.872Z','2025-08-04T19:47:29.872Z'),(17,25,'9826113761',5,4,4,4,'gud','2025-08-04T19:47:50.366Z','2025-08-04T19:47:50.366Z'),(18,24,'9826113761',3,3,3,3,'gud','2025-08-04T19:48:04.277Z','2025-08-04T19:48:04.277Z'),(19,24,'9826113761',4,4,4,4,'ok ok','2025-08-04T19:48:17.205Z','2025-08-04T19:48:17.205Z'),(20,22,'9826113761',5,2,2,3,'food gud but survice is not gud','2025-08-05T08:21:56.121Z','2025-08-05T08:21:56.121Z'),(21,22,'9826113761',5,5,5,5,'','2025-08-10T20:12:54.001Z','2025-08-10T20:12:54.001Z');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-17 18:17:26
