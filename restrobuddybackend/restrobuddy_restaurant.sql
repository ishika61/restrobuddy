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
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restaurant` (
  `restaurantid` int(100) NOT NULL AUTO_INCREMENT,
  `restaurantname` varchar(45) DEFAULT NULL,
  `ownername` varchar(45) DEFAULT NULL,
  `phonenumber` varchar(45) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `mobilenumber` varchar(45) DEFAULT NULL,
  `url` text,
  `fssai` varchar(45) DEFAULT NULL,
  `gstno` varchar(45) DEFAULT NULL,
  `gsttype` varchar(45) DEFAULT NULL,
  `filefssai` text,
  `fileshopact` text,
  `filelogo` text,
  `address` varchar(45) DEFAULT NULL,
  `avragecost` varchar(5) DEFAULT NULL,
  `stateid` varchar(45) DEFAULT NULL,
  `cityid` varchar(45) DEFAULT NULL,
  `latlong` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0',
  `createdat` varchar(100) DEFAULT NULL,
  `updatedat` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`restaurantid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (13,'Mc Donald\'s','Christopher John Kempczinski','9893598343','mcdonald@gmail.com','9893598343','https://www.mcdonalds.com','154578','154784654875249','28','e2552c72-3d68-491b-83d2-13653c596ec4.jpg','57a7fc38-744a-4ffa-b4a9-1a4ceff1f940.webp','954c91ba-dfe9-4b6b-9cdc-84a05c50a7df.png','Dindayal City mall','700','1','100','26/78','1234',0,'2025-08-03T14:02:39.273Z','2025-08-03T14:02:39.273Z'),(14,'Subway','Roark Capital','89822 14083','subway@gmail.com','8982214083','https://www.subway.com','456878','400578984512354','28','60dc352b-d13c-4cfd-928e-e9d07cf16df8.jpg','edefad62-18ad-4122-bb90-518d2b5374f1.webp','21dabb89-f073-4113-bbec-d17862c1af1d.png','City Center','900','1','100','26/78','1234',0,'2025-08-03T14:02:49.794Z','2025-08-03T14:02:49.794Z'),(15,'Burger King','Restaurant Brands International (RBI)','86574 46793','burgerking@gmail.com','8657446793','https://www.bugerking.com','789845','102045681005789','28','746f5d81-e486-4b84-bbb4-a59e46b296b2.jpg','9cc86507-b7d6-4c2a-a3e7-81276f4513fc.webp','fb591891-dd61-4289-8049-1bb1231afd57.png','DB City Mall','1000','1','100','26/78','1234',0,'2025-08-03T14:03:02.779Z','2025-08-03T14:03:02.779Z'),(16,'Bikanervala','Shyam Sundar Aggarwal','7898453518','bikanervala@gmail.com','7898453518','https://www.bikanervala.com','897547','100254879584012','28','d2ce36cd-43e5-4804-85bc-8d3afc393209.jpg','b237073f-2310-4151-945a-8f00f1b9efdd.webp','771a6f5a-3ac5-468d-91b9-c0f063fe6225.png','City Center','6000','1','100','26/78','1234',0,'2025-08-03T14:03:14.151Z','2025-08-03T14:03:14.151Z'),(17,'KFC','Yum! Brands','9889746512','kfc@gmail.com','9889746512','https://www.kfc.com','457895','456985751203251','28','b05b2ee1-2b00-4fcd-8257-f78bae4df3b0.jpg','2c1779d6-3d39-477a-9f67-1754ef8121f2.webp','69466a32-b7d0-407a-b958-52ef45f9be21.jpg','DB City Mall','600','1','100','26/78','1234',0,'2025-08-03T14:03:25.017Z','2025-08-03T14:03:25.017Z'),(18,'Haldiram\'s','Shiv Kishan Agarwal and Manohar Lal Agarwal','9987654217','haldiram@gmail.com','9987654217','https://www.haldirams.com','562415','100025789542157','28','fdc93ef0-3742-42c2-98ab-827f0f996e87.jpg','e9108322-792c-4c0a-94e7-d3d8cf6add7b.webp','1250fa48-89f9-4515-a717-26c33743de7b.png','Shinde Ki Chavani','900','1','100','26/79','1234',0,'2025-08-03T14:03:38.262Z','2025-08-03T14:03:38.262Z'),(19,'Hira Sweets','Paras Sharma','8989751435','hirasweets@gmail.com','8989751435','https://www.hirasweets.com','789845','145658102500356','18','ce7e9f55-f707-4d65-bbbc-1a44b3b980b9.jpg','89c831bb-730e-44a9-9f32-a0771c830b96.webp','aaa1b84b-fea2-4515-8844-96e8003778c4.png','City Center','800','1','100','26/79','1234',0,'2025-08-03T14:03:47.423Z','2025-08-03T14:03:47.423Z'),(20,'Theo Broma','Kainaz','7485961425','kainaz@gmail.com','7485961425','https://www.theobroma.com','888784','870000549512354','28','aec031bb-e7c2-4383-b893-1cdfb939da64.jpg','fa85824f-0ac3-478b-9c38-d808b1f05f42.webp','11c3627f-ebcb-4c56-8396-ace55f43676a.jpg','City Center','900','1','100','26/78','1234',0,'2025-08-03T14:03:57.783Z','2025-08-03T14:03:57.783Z'),(21,'EatFit','Ankit Nagori','8878984562','Ankit@gmail.com','8878984562','https://www.eatfit.com','895874','100255453612547','18','83bbb7e8-e4b1-44ea-adbd-435e0615d5c2.jpg','bbb62be7-3b46-4df3-9e7c-20937229d072.webp','f0660eb0-15cb-4036-a0cf-b4d0b04123e2.png','DB Mall','700','1','100','26/78','1234',0,'2025-08-03T14:04:08.583Z','2025-08-03T14:04:08.583Z'),(22,'Param Food','Mukul Agrawal','7400737711','param@gmail.com','7400737711','https://www.paramfood.com','564545','166685479845325','28','c6b4ce28-98f7-4353-9e30-77617be3f342.jpg','8b22bdc5-94b7-44cd-87ea-b4740fc45421.webp','b9e16669-7044-4e5d-8f2d-2364f58fe4ae.jpg','Govindpuri','600','1','100','26/77','1234',0,'2025-08-03T14:04:19.995Z','2025-08-03T14:04:19.995Z'),(23,'Box 8','Amit Raj and Anshul Gupta','9926488974','amit@gmail.com','9926488974','https://www.box8.com','789845','100545876941254','18','6b947ed2-e24e-46a8-8790-7555f396cc38.jpg','bc1a8571-2aaa-4395-9821-e82b47ed0a05.webp','1ab7b2c6-b2ed-4037-96e2-cb53622d53de.jpg','City Center','1100','1','100','28/78','1234',0,'2025-08-03T14:05:13.903Z','2025-08-03T14:05:13.903Z'),(24,'Briyani Blues','Raymond Andrews and Aparna Andrews','9345657898','briyaniblues@gmail.com','9345657898','https://www.briyaniblues.com','789854','125499586312458','18','066125dc-e212-4bb0-a061-f2ec7972039c.jpg','be4f4dd9-ea85-4b6a-bff6-a938b661753f.webp','d39757f3-fe65-46a2-9768-b14408d9cb1d.png','Patel Nagar','1000','1','100','26/78','1234',0,'2025-08-03T14:05:04.164Z','2025-08-03T14:05:04.164Z'),(25,'HOB(House Of Briyani)','Mikhai Shahani','9926784535','mikhai@gmail.com','9926784535','https://www.hob.com','789845','256848792545621','28','18381c56-3f5d-40f2-80fe-f4ec71cdb49b.jpg','a24096fe-bb46-42cc-bcad-9fb6cb93efa6.webp','1f294343-bfd4-463e-9d0a-edf18e799b23.jpg','Phoolbhag','1200','1','100','26/78','1234',0,'2025-08-03T14:04:52.646Z','2025-08-03T14:04:52.646Z'),(26,'Naturals','Raghunandan Sriniwas Kamath','8878984562','naturals@gmail.com','8878984562','https://www.naturals.com','658457','489578984512365','28','1ef61795-9bc1-4626-badc-b0c3f4f016fe.jpg','ce96c656-68c1-4828-b1de-663a2a759c01.webp','c6ba93d4-b51a-4ff7-ada0-c154140e0fd8.png','City Center','2000','1','100','26/78','1234',0,'2025-08-03T14:04:43.449Z','2025-08-03T14:04:43.449Z'),(27,'Rolls king','Harshit Kumar','9996459978','rollsking@gmail.com','9996459978','https://www.rollsking.com','752154','100005245621548','5','1c162b2d-4866-4f1a-9dd4-4465a9b4bbbd.jpg','af69ff64-f728-4af2-9732-05794ba38afd.webp','f50a4d1e-4140-46d8-96ee-ec687146d23a.jpg','Morar','1200','1','100','26/78','1234',0,'2025-08-03T14:04:32.938Z','2025-08-03T14:04:32.938Z'),(28,'Starbucks','Brian Niccol','7000457898','starbucks@gmail.com','7000457898','https://www.starbucks','458575','104525458754521','28','130a2aab-12f0-4cfb-a372-b86deb3a492c.jpg','1463a6d6-26c5-4108-9f05-fd1bb49882ce.webp','1e968e98-a807-4ec1-ab9f-8c2664fe57a0.png','City Center','1200','1','100','26/78','1234',0,'2025-08-03T14:05:27.266Z','2025-08-03T14:05:27.266Z'),(29,'Kwality','Rk Bansal','0751246458','kw@gmail.com','9528746512','http://kwality.com','126547','546875143528001','28','faf47271-3a68-486d-90bb-26e1aae22873.jpg','5586f815-0550-4056-9fd6-42b56deab034.webp','74ca4811-21aa-454a-ad77-947f04670e65.png','City Center','2000','1','100','44,42','1234',0,'2025-08-03T14:05:36.318Z','2025-08-03T14:05:36.318Z');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
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
