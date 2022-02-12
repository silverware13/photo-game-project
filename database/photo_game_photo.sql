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
) ENGINE=InnoDB AUTO_INCREMENT=252 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,1,7,'affenpinscher','/photos/dog1.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(2,1,7,'afghan hound','/photos/dog2.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(3,1,7,'airedale terrier','/photos/dog3.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(4,1,7,'akita','/photos/dog4.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(5,1,7,'alaskan klee kai','/photos/dog5.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(6,1,7,'alaskan malamute','/photos/dog6.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(7,1,7,'american bulldog','/photos/dog7.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(8,1,7,'american english coonhound','/photos/dog8.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(9,1,7,'american eskimo dog','/photos/dog9.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(10,1,7,'american foxhound','/photos/dog10.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(11,1,7,'american hairless terrier','/photos/dog11.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(12,1,7,'american leopard hound','/photos/dog12.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(13,1,7,'american staffordshire terrier','/photos/dog13.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(14,1,7,'american water spaniel','/photos/dog14.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(15,1,7,'anatolian shepherd dog','/photos/dog15.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(16,1,7,'appenzeller sennenhund','/photos/dog16.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(17,1,7,'australian cattle dog','/photos/dog17.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(18,1,7,'australian kelpie','/photos/dog18.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(19,1,7,'australian shepherd','/photos/dog19.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(20,1,7,'australian stumpy tail cattle dog','/photos/dog20.jpg','2022-02-11 06:34:21','2022-02-11 06:34:21'),(21,6,8,'Apple (Malus Domestica)','/photos/tree1.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(22,6,8,'Pear (Pyrus Communis)','/photos/tree2.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(23,6,8,'Peach (Prunus Persica)','/photos/tree3.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(24,6,8,'Banyan (Ficus Benghalensis)','/photos/tree4.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(25,6,8,'Common Fig (Ficus Carica)','/photos/tree5.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(26,6,8,'Black Ash (Fraxinus Nigra)','/photos/tree6.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(27,6,8,'White Ash (Fraxinus Americana)','/photos/tree7.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(28,6,8,'Neem (Azadirachta Indica)','/photos/tree8.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(29,6,8,'Bigtooth Aspen (Populus Grandidentata)','/photos/tree9.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(30,6,8,'Quaking Aspen (Populus Tremula)','/photos/tree10.jpg','2022-02-12 03:38:40','2022-02-12 03:38:40'),(31,6,8,'Mahogany (Swietenia Mahagoni)','/photos/tree11.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(32,6,8,'Basswood (Tilia Americana)','/photos/tree12.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(33,6,8,'American Beech (Fagus Grandifolia)','/photos/tree13.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(34,6,8,'European Beech (Fagus Sylvatica)','/photos/tree14.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(35,6,8,'Tulip (Liriodendron Tulipifera)','/photos/tree15.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(36,6,8,'Black Birch (Betula Lenta)','/photos/tree16.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(37,6,8,'Gray Birch (Betula Populifolia)','/photos/tree17.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(38,6,8,'Paper Birch (Betula Papyrifera)','/photos/tree18.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(39,6,8,'Yellow Birch (Betula Alleghaniensis)','/photos/tree19.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(40,6,8,'Butternut (Juglans Cinerea)','/photos/tree20.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(41,6,8,'Black Cherry (Prunus Serotina)','/photos/tree21.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(42,6,8,'Pin Cherry (Prunus Pensylvanica)','/photos/tree22.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(43,6,8,'Sour Cherry (Prunus Cerasus)','/photos/tree23.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(44,6,8,'Sweet Cherry (Prunus Avian)','/photos/tree24.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(45,6,8,'American Chestnut (Castanea Dentata)','/photos/tree25.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(46,6,8,'Eastern Cottonwood (Populus Deltoides)','/photos/tree26.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(47,6,8,'Cucumber Tree (Magnolia Acuminata)','/photos/tree27.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(48,6,8,'Mountain Magnolia (Magnolia Fraseri)','/photos/tree28.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(49,6,8,'Purple Magnolia (Magnolia Lilliflora)','/photos/tree29.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(50,6,8,'Sweetbay Magnolia (Magnolia Virginiana)','/photos/tree30.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(51,6,8,'American Elm (Ulmus Americana)','/photos/tree31.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(52,6,8,'English Elm (Ulmus Minor ‘Atinia’)','/photos/tree32.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(53,6,8,'Slippery Elm (Ulmus Rubra)','/photos/tree33.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(54,6,8,'Hawthorn (Crataegus)','/photos/tree34.jpg','2022-02-12 03:54:06','2022-02-12 03:54:06'),(55,6,8,'Black Locust (Robinia Pseudoacacia)','/photos/tree35.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(56,6,8,'Honey Locust (Gleditsia Triacanthos)','/photos/tree36.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(57,6,8,'Bitternut Hickory (Carya Cordiformis)','/photos/tree37.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(58,6,8,'Pignut Hickory (Carya Glabra)','/photos/tree38.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(59,6,8,'Shagbark Hickory (Carya Ovata)','/photos/tree39.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(60,6,8,'American Hophornbeam (Ostrya Virginiana)','/photos/tree40.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(61,6,8,'American Hornbeam (Carpinus Caroliniana)','/photos/tree41.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(62,6,8,'Tamarack / American Larch (Larix Laricina)','/photos/tree42.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(63,6,8,'European Larch (Larix Decidua)','/photos/tree43.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(64,6,8,'Western Larch (Larix Occidentalis)','/photos/tree44.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(65,6,8,'Alpine Larch (Larix Lyallii)','/photos/tree45.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(66,6,8,'Red Maple (Acer Rubrum)','/photos/tree46.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(67,6,8,'Silver Maple (Acer Saccharinum)','/photos/tree47.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(68,6,8,'Sugar Maple (Acer Saccharum)','/photos/tree48.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(69,6,8,'Black Oak (Quercus Velutina)','/photos/tree49.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(70,6,8,'Chestnut Oak (Quercus Montana)','/photos/tree50.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(71,6,8,'Northern Red Oak (Quercus Rubra)','/photos/tree51.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(72,6,8,'Scarlet Oak (Quercus Coccinea)','/photos/tree52.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(73,6,8,'White Oak (Quercus Alba)','/photos/tree53.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(74,6,8,'Eastern White Pine (Pinus Strobus)','/photos/tree54.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(75,6,8,'Sassafras Tree (Sassafras Albidum)','/photos/tree55.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(76,6,8,'Serviceberry (Amelanchier Canadensis)','/photos/tree56.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(77,6,8,'Black Walnut (Juglans Nigra)','/photos/tree57.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(78,6,8,'Black Willow (Salix Nigra)','/photos/tree58.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(79,6,8,'Flowering Dogwood (Cornus Florida)','/photos/tree59.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(80,6,8,'Australian Mountain Ash (Eucalyptus Regnans)','/photos/tree60.jpg','2022-02-12 04:09:51','2022-02-12 04:09:51'),(81,6,8,'River Red Gum (Eucalyptus Camaldulensis)','/photos/tree61.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(82,6,8,'Flowering Gum (Corymbia Ficifolia)','/photos/tree62.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(83,6,8,'Water Gum (Tristaniopsis Luscious)','/photos/tree63.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(84,6,8,'Balsam Fir (Abies Balsamea)','/photos/tree64.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(85,6,8,'Fraser Fir (Abies Fraseri)','/photos/tree65.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(86,6,8,'Douglas Fir Pseudotsuga Menziesii)','/photos/tree66.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(87,6,8,'Eastern Hemlock (Tsuga Canadensis)','/photos/tree67.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(88,6,8,'Mountain Hemlock (Tsuga Mertensiana)','/photos/tree68.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(89,6,8,'Western Hemlock (Tsgua Heterophylla)','/photos/tree69.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(90,6,8,'Bristlecone Hemlock (Nothotsuga Longibracteata)','/photos/tree70.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(91,6,8,'Pitch Pine (Pinus Rigida)','/photos/tree71.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(92,6,8,'Red Pine (Pinus Resinosa)','/photos/tree72.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(93,6,8,'Scotch Pine (Pinus Sylvestris)','/photos/tree73.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(94,6,8,'Ponderosa Pine (Pinus Ponderosa)','/photos/tree74.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(95,6,8,'Bristlecone Pine (Pinus Longaeva)','/photos/tree75.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(96,6,8,'Wollemi Pine (Wollemia Nobilis)','/photos/tree76.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(97,6,8,'Eastern Juniper (Juniperus Virginiana)','/photos/tree77.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(98,6,8,'Western Juniper (Juniperus Occidentalis)','/photos/tree78.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(99,6,8,'Red Spruce (Picea Rubens)','/photos/tree79.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(100,6,8,'White Spruce (Picea Glauca)','/photos/tree80.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(101,6,8,'Black Spruce (Picea Mariana)','/photos/tree81.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(102,6,8,'Coast Redwood (Sequoia Semperivens)','/photos/tree82.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(103,6,8,'Giant Redwood (Sequoiadendron Giganteum)','/photos/tree83.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(104,6,8,'Dawn Redwood (Metasequoia Glyptostroboides)','/photos/tree84.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(105,6,8,'Tanoak (Notholithocarpus Densiflorus)','/photos/tree85.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(106,6,8,'Kauri (Agathis Australis)','/photos/tree86.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(107,6,8,'Monkey Puzzle (Araucaria Araucana)','/photos/tree87.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(108,6,8,'Patagonian Cypress (Fitzroya Cupressoides)','/photos/tree88.jpg','2022-02-12 04:27:43','2022-02-12 04:27:43'),(109,6,8,'Nootka Cypress (Cupressus Nootkatensis)','/photos/tree89.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(110,6,8,'Atlantic White Cedar (Chamaecyparis Thyoides)','/photos/tree90.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(111,6,8,'Northern White Cedar (Thuja Occidentalis)','/photos/tree91.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(112,6,8,'Western Red Cedar (Thuja Plicata)','/photos/tree92.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(113,6,8,'Atlas Cedar (Cedrus Atlantica)','/photos/tree93.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(114,6,8,'Southern Live Oak (Quercus Virginiana)','/photos/tree94.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(115,6,8,'Bat Fig (Ficus Amplissima)','/photos/tree95.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(116,6,8,'Southern Magnolia (Magnolia Grandiflora)','/photos/tree96.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(117,6,8,'Blueberry Ash (Elaeocarpus Reticulatus)','/photos/tree97.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(118,6,8,'Coconut Palm (Cocos Nucifera)','/photos/tree98.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(119,6,8,'Peppermint (Agonia Flexuosa)','/photos/tree99.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(120,6,8,'Kumquat (Citrus Japonica)','/photos/tree100.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(121,6,8,'Olive (Ole Europaeae)','/photos/tree101.jpg','2022-02-12 04:51:55','2022-02-12 04:51:55'),(122,1,8,'australian terrier','/photos/dog21.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(123,1,8,'azawakh','/photos/dog22.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(124,1,8,'barbado da terceira','/photos/dog23.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(125,1,8,'barbet','/photos/dog24.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(126,1,8,'basenji','/photos/dog25.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(127,1,8,'basset fauve de bretagne','/photos/dog26.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(128,1,8,'basset hound','/photos/dog27.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(129,1,8,'bavarian mountain scent hound','/photos/dog28.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(130,1,8,'beagle','/photos/dog29.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(131,1,8,'bearded collie','/photos/dog30.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(132,1,8,'beauceron','/photos/dog31.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(133,1,8,'bedlington terrier','/photos/dog32.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(134,1,8,'belgian laekenois','/photos/dog33.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(135,1,8,'belgian malinois','/photos/dog34.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(136,1,8,'belgian sheepdog','/photos/dog35.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(137,1,8,'belgian tervuren','/photos/dog36.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(138,1,8,'bergamasco sheepdog','/photos/dog37.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(139,1,8,'berger picard','/photos/dog38.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(140,1,8,'bernese mountain dog','/photos/dog39.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(141,1,8,'bichon frise','/photos/dog40.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(142,1,8,'biewer terrier','/photos/dog41.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(143,1,8,'black and tan coonhound','/photos/dog42.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(144,1,8,'black russian terrier','/photos/dog43.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(145,1,8,'bloodhound','/photos/dog44.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(146,1,8,'bluetick coonhound','/photos/dog45.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(147,1,8,'boerboel','/photos/dog46.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(148,1,8,'bohemian shepherd','/photos/dog47.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(149,1,8,'bolognese','/photos/dog48.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(150,1,8,'border collie','/photos/dog49.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(151,1,8,'border terrier','/photos/dog50.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(152,1,8,'borzoi','/photos/dog51.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(153,1,8,'boston terrier','/photos/dog52.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(154,1,8,'bouvier des flandres','/photos/dog53.jpg','2022-02-12 08:46:29','2022-02-12 08:46:29'),(155,1,8,'boxer','/photos/dog54.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(156,1,8,'boykin spaniel','/photos/dog55.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(157,1,8,'bracco italiano','/photos/dog56.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(158,1,8,'braque du bourbonnais','/photos/dog57.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(159,1,8,'bull terrier','/photos/dog58.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(160,1,8,'bulldog','/photos/dog59.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(161,1,8,'bullmastiff','/photos/dog60.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(162,1,8,'cardigan welsh corgi','/photos/dog61.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(163,1,8,'cesky terrier','/photos/dog62.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(164,1,8,'chihuahua','/photos/dog63.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(165,1,8,'chinese shar-pei','/photos/dog64.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(166,1,8,'chow chow','/photos/dog65.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(167,1,8,'cocker spaniel','/photos/dog66.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(168,1,8,'collie','/photos/dog67.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(169,1,8,'czechoslovakian vlcak','/photos/dog68.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(170,1,8,'dachshund','/photos/dog69.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(171,1,8,'dalmatian','/photos/dog70.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(172,1,8,'doberman pinscher','/photos/dog71.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(173,1,8,'dutch shepherd','/photos/dog72.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(174,1,8,'english cocker spaniel','/photos/dog73.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(175,1,8,'english foxhound','/photos/dog74.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(176,1,8,'english setter','/photos/dog75.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(177,1,8,'eurasier','/photos/dog76.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(178,1,8,'french bulldog','/photos/dog77.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(179,1,8,'german longhaired pointer','/photos/dog78.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(180,1,8,'german pinscher','/photos/dog79.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(181,1,8,'german shepherd dog','/photos/dog80.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(182,1,8,'german shorthaired pointer','/photos/dog81.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(183,1,8,'giant schnauzer','/photos/dog82.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(184,1,8,'golden retriever','/photos/dog83.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(185,1,8,'great dane','/photos/dog84.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(186,1,8,'great pyrenees','/photos/dog85.jpg','2022-02-12 08:58:29','2022-02-12 08:58:29'),(187,1,8,'greyhound','/photos/dog86.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(188,1,8,'harrier','/photos/dog87.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(189,1,8,'havanese','/photos/dog88.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(190,1,8,'hokkaido','/photos/dog89.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(191,1,8,'ibizan hound','/photos/dog90.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(192,1,8,'irish red and white setter','/photos/dog91.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(193,1,8,'irish wolfhound','/photos/dog92.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(194,1,8,'italian greyhound','/photos/dog93.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(195,1,8,'japanese akitainu','/photos/dog94.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(196,1,8,'japanese spitz','/photos/dog95.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(197,1,8,'kerry blue terrier','/photos/dog96.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(198,1,8,'komondor','/photos/dog97.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(199,1,8,'kuvasz','/photos/dog98.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(200,1,8,'labrador retriever','/photos/dog99.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(201,1,8,'lancashire heeler','/photos/dog100.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(202,1,8,'lhasa apso','/photos/dog101.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(203,1,8,'maltese','/photos/dog102.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(204,1,8,'mastiff','/photos/dog103.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(205,1,8,'miniature american shepherd','/photos/dog104.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(206,1,8,'miniature bull terrier','/photos/dog105.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(207,1,8,'miniature pinscher','/photos/dog106.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(208,1,8,'miniature schnauzer','/photos/dog107.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(209,1,8,'mudi','/photos/dog108.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(210,1,8,'neapolitan mastiff','/photos/dog109.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(211,1,8,'newfoundland','/photos/dog110.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(212,1,8,'norfolk terrier','/photos/dog111.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(213,1,8,'norwegian elkhound','/photos/dog112.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(214,1,8,'old english sheepdog','/photos/dog113.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(215,1,8,'otterhound','/photos/dog114.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(216,1,8,'parson russell terrier','/photos/dog115.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(217,1,8,'pekingese','/photos/dog116.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(218,1,8,'pembroke welsh corgi','/photos/dog117.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(219,1,8,'pharaoh hound','/photos/dog118.jpg','2022-02-12 09:09:18','2022-02-12 09:09:18'),(220,1,8,'pointer','/photos/dog119.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(221,1,8,'polish lowland sheepdog','/photos/dog120.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(222,1,8,'pomeranian','/photos/dog121.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(223,1,8,'poodle (miniature)','/photos/dog122.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(224,1,8,'poodle (standard)','/photos/dog123.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(225,1,8,'poodle (toy)','/photos/dog124.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(226,1,8,'porcelaine','/photos/dog125.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(227,1,8,'portuguese water dog','/photos/dog126.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(228,1,8,'pug','/photos/dog127.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(229,1,8,'rat terrier','/photos/dog128.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(230,1,8,'rottweiler','/photos/dog129.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(231,1,8,'russell terrier','/photos/dog130.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(232,1,8,'saint bernard','/photos/dog131.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(233,1,8,'saluki','/photos/dog132.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(234,1,8,'scottish deerhound','/photos/dog133.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(235,1,8,'scottish terrier','/photos/dog134.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(236,1,8,'shetland sheepdog','/photos/dog135.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(237,1,8,'shiba inu','/photos/dog136.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(238,1,8,'shih tzu','/photos/dog137.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(239,1,8,'shikoku','/photos/dog138.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(240,1,8,'siberian husky','/photos/dog139.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(241,1,8,'skye terrier','/photos/dog140.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(242,1,8,'smooth fox terrier','/photos/dog141.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(243,1,8,'spanish water dog','/photos/dog142.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(244,1,8,'tibetan mastiff','/photos/dog143.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(245,1,8,'welsh terrier','/photos/dog144.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(246,1,8,'west highland white terrier','/photos/dog145.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(247,1,8,'whippet','/photos/dog146.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(248,1,8,'xoloitzcuintli','/photos/dog147.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(249,1,8,'yakutian laika','/photos/dog148.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(250,1,8,'yorkshire terrier','/photos/dog149.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34'),(251,1,8,'standard schnauzer','/photos/dog150.jpg','2022-02-12 09:20:34','2022-02-12 09:20:34');
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

-- Dump completed on 2022-02-12  1:21:21
