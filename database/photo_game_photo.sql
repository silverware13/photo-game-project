-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: photo_game
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `photo_id` int NOT NULL AUTO_INCREMENT,
  `album_id` int NOT NULL,
  `user_id` int NOT NULL,
  `answer` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_utc` datetime NOT NULL,
  `modified_utc` datetime NOT NULL,
  PRIMARY KEY (`photo_id`),
  UNIQUE KEY `ui_photo_album_answer_image` (`album_id`,`answer`,`image_url`),
  KEY `fk_photo_user` (`user_id`) /*!80000 INVISIBLE */,
  KEY `fk_photo_album` (`album_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_photo_album` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`),
  CONSTRAINT `fk_photo_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,1,7,'affenpinscher','/photos/dog1.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(2,1,7,'afghan hound','/photos/dog2.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(3,1,7,'airedale terrier','/photos/dog3.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(4,1,7,'akita','/photos/dog4.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(5,1,7,'alaskan klee kai','/photos/dog5.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(6,1,7,'alaskan malamute','/photos/dog6.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(7,1,7,'american bulldog','/photos/dog7.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(8,1,7,'american english coonhound','/photos/dog8.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(9,1,7,'american eskimo dog','/photos/dog9.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(10,1,7,'american foxhound','/photos/dog10.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(11,1,7,'american hairless terrier','/photos/dog11.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(12,1,7,'american leopard hound','/photos/dog12.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(13,1,7,'american staffordshire terrier','/photos/dog13','2022-02-11 06:34:21','2022-02-11 06:34:21'),(14,1,7,'american water spaniel','/photos/dog14','2022-02-11 06:34:21','2022-02-11 06:34:21'),(15,1,7,'anatolian shepherd dog','/photos/dog15','2022-02-11 06:34:21','2022-02-11 06:34:21'),(16,1,7,'appenzeller sennenhund','/photos/dog16','2022-02-11 06:34:21','2022-02-11 06:34:21'),(17,1,7,'australian cattle dog','/photos/dog17','2022-02-11 06:34:21','2022-02-11 06:34:21'),(18,1,7,'australian kelpie','/photos/dog18','2022-02-11 06:34:21','2022-02-11 06:34:21'),(19,1,7,'australian shepherd','/photos/dog19','2022-02-11 06:34:21','2022-02-11 06:34:21'),(20,1,7,'australian stumpy tail cattle dog','/photos/dog20','2022-02-11 06:34:21','2022-02-11 06:34:21');
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-11  2:41:16
