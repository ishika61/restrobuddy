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
-- Table structure for table `restaurantpicture`
--

DROP TABLE IF EXISTS `restaurantpicture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restaurantpicture` (
  `restaurantid` int(11) DEFAULT NULL,
  `pictureid` int(11) NOT NULL AUTO_INCREMENT,
  `pictures` text,
  `picturetype` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pictureid`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantpicture`
--

LOCK TABLES `restaurantpicture` WRITE;
/*!40000 ALTER TABLE `restaurantpicture` DISABLE KEYS */;
INSERT INTO `restaurantpicture` VALUES (13,19,'58954c00-3103-4630-b439-fcce99ca3282.jpg,67192438-db47-46ae-9dfe-93d9e38463da.jpg,dd3e1b93-5603-4a06-b73c-020df6bf94d6.jpg,3740c23b-73fd-4d01-a4f2-c031026f5ff2.jpg','Ambience'),(13,20,'7e668717-ce19-4978-a4f8-2eeda24ba33f.jpg,76785120-a30b-4e8e-bdad-8d0d4f5213f1.jpg,b909a3b2-49a5-4414-9abf-718142597441.jpg,ed0dafbd-4f74-4e6d-b2cb-714155c35cce.jpg','Menu'),(13,21,'68bb85b6-c800-4347-87ad-9e822f69705a.jpg,44524766-427d-41b0-9838-c4ade63ce021.jpg,7af3cc13-f45a-401e-935a-5a1e54b7d129.jpg,e209c9ba-1bae-42cb-b614-fa97101b1fd0.jpg,e0c7c001-e076-4853-9bc9-1aab0e531034.jpg','Food'),(14,22,'96991b4c-227a-4052-87f1-b381f7af6cb0.jpg,13b6765e-d3b5-49ff-9b98-2d6562e5a7f9.jpg,c2718752-8105-4ba0-94dd-b0918b48380f.jpg,11c26f24-23f7-4e43-9067-c656d7c0289e.jpg,769ed49e-d03c-417d-a211-4d03e8e14f09.jpg','Menu'),(14,23,'83432780-fd2a-4433-81e9-35ddfc8cf8e2.jpg,e9b1e37f-bfc7-445d-b522-5f073675f409.jpg,7576cb08-642c-477b-b6b6-e1820e7ea9b9.jpg,e9ba250b-a007-437a-90b0-1a2594341446.jpg,5be2b284-9a10-4bdf-8374-c8ca26007f8d.jpg,987f14f3-a4f4-4e05-b22e-2b73afb6be7c.jpg','Food'),(14,24,'f9200fab-ab50-4063-a4ef-5d9034aae831.jpg,272b6f5a-5ceb-4649-b44a-841edcd1b7bb.jpg,d4ab95f4-2618-4e92-9309-8e4eb04fad8c.jpg,b3553330-67a4-4e0a-822d-e8fca80bcf01.jpg,79ce32a6-9dcf-4298-a282-d2816489992c.jpg','Ambience'),(15,25,'6a4df02e-53b8-4b55-8ded-84fc1687b5b0.jpg,38a14b59-5683-4dc7-acbe-21974761dfd8.jpg,bf7ce8a4-547f-4ec6-be4a-d12fd2f3f849.jpg,96750ea7-5716-47d8-b271-5158ae145e50.jpg,f47dce71-c4ea-4eb7-8041-76b974fbda8f.jpg','Ambience'),(15,26,'f80d3788-56c0-40e8-ad4a-4b956a2027f8.jpg,ec6e0900-8d06-4d32-8e85-e64fbaf18fb3.jpg,99e8e464-01d7-4ea5-bf11-5d67ac064f5d.jpg,f01ae7a0-e3d2-418b-9de0-5b9d53bc3b2a.jpg,7ffd22b2-a476-4634-8f00-31553b5b17ac.jpg','Food'),(15,27,'790d5f97-3746-4f1d-babf-8f221c0fad12.jpg,b944bef3-153d-47f6-84af-19174001568a.jpg,f4a11e8f-e1fe-4613-872b-d993c0dafd3b.jpg,856bbbd0-45cc-4b9a-a3ed-6670678d3cda.jpg','Menu'),(22,28,'0fb1459c-c847-4c4f-b230-4b79243b2a04.jpg,ef4eb8eb-ea94-4263-9bf5-9d7fd6b398c0.jpg,be861f90-bdcb-4196-8d50-52e965665c72.jpg,251148bf-1395-4116-873c-32b65d333838.jpg,cad25eec-3e92-4b9c-aea8-25b7e726cf7b.jpg,8ca91fdd-9f48-4cd2-a45a-e42e11a52cf7.jpg,04e5bc35-8780-45d7-a154-997581c0228e.jpg,5e01d837-763e-4fdf-9cbd-628e49c4595a.jpg,c4073b48-e8ba-4369-81d2-31644671ddfe.jpg,909243b6-a2ca-4f93-99fb-e24e37a6120d.jpg,84b0ee74-3e51-416a-a4ff-3a3627b3da70.jpg,ac982385-fb4e-46c0-8b1e-aae20b00b769.jpg,b38bf767-dfc4-4791-9d52-4a4411af2af9.jpg,498068e4-f2d9-4a5f-b6e3-ceffed28face.jpg','Food'),(22,29,'919c5d8f-0ed2-487e-92c6-f37518d9ca4a.png,46bfbfb2-345d-49ba-ac7e-da3e4f4eb53f.png,853870c7-9250-427b-bd05-05d17c64f2b0.png,090e09bc-f688-4823-b4ac-5391ef0138fd.png','Ambience'),(22,30,'5d41c6ee-0b65-4976-8dc5-383e7644f5d0.jpg,038322ec-12b9-4503-b10f-2453937891a7.jpg,04511e2d-90fe-4571-ab15-8c21b6f496f9.jpg,4cfc351a-ecf0-4490-a2e6-a160cc6de3c1.jpg,44e944a8-2f54-4fc3-9570-d89ae948d6fc.jpg','Menu'),(19,31,'09629d51-a75e-44ef-8a36-60c37c40c1d4.jpg,1f6bbde7-ce80-47d1-b330-b0d23b85f5d4.jpg,681661d1-33fc-408b-910e-7295d8b9f1ac.jpg,a18fa2cb-9069-4e69-ad94-3be950acedd3.jpg,d437e041-1458-4d7e-bed2-b3101387f583.jpg','Ambience'),(16,36,'977106bc-ce9c-48b2-b5db-1a88955b33d1.jpg,acca4619-a065-4b42-83a2-83a5dee42580.jpg,4a74b61c-87f3-4968-af06-bd4fd4347682.jpg,873d1430-1c53-49b0-a879-00607270547c.jpg','Ambience'),(17,37,'d72fb53f-a76e-49cd-8ccb-699206e680b2.jpg,06321a64-99ce-4a60-8718-079fc21ecb3a.jpg,9d367f56-4918-4681-ac74-dcbfa0811a83.jpg,b3f84d47-27d9-4ff7-945f-54f2966981f4.jpg,3558208f-7b4c-4379-bd28-d3569934e610.jpg','Ambience');
/*!40000 ALTER TABLE `restaurantpicture` ENABLE KEYS */;
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
