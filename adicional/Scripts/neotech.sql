CREATE DATABASE  IF NOT EXISTS `neotech` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `neotech`;
-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: neotech
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `pc` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `country` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `province` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'manuel castro 5020','1824','Argentina','','',11,NULL,NULL),(2,'Osorio 3041','1825','Argentina','','',11,NULL,NULL),(3,'','','','','',11,NULL,NULL),(4,'Osorio 3050','1825','Argentina','','',11,NULL,NULL),(5,'Manuel Castro 4027','1825','Argentina','','',11,NULL,NULL),(6,'manuel castro 5020','1824','Argentina','','',11,NULL,NULL),(7,'av siempre viva 742','11245','EE.UU','','',14,'2021-09-25 20:29:23','2021-09-25 20:29:23'),(8,'av siempre viva 742','11245','EE.UU','','',14,'2021-09-25 20:30:03','2021-09-25 20:30:03'),(9,'','','','','',13,'2021-09-30 18:54:26','2021-09-30 18:54:26'),(10,'','','','','',15,'2021-09-30 19:11:56','2021-09-30 19:11:56');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Sony'),(2,'HyperX'),(3,'Gigabyte'),(4,'Logitech'),(5,'Nintendo');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_50` (`user_id`),
  CONSTRAINT `FK_48` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_products`
--

DROP TABLE IF EXISTS `cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_item_price` decimal(10,0) NOT NULL,
  `order_item_quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_products`
--

LOCK TABLES `cart_products` WRITE;
/*!40000 ALTER TABLE `cart_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Audio'),(2,'Teclado'),(3,'Mouse'),(4,'Monitores'),(5,'Gaming');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(40) NOT NULL,
  `description` text DEFAULT NULL,
  `color` varchar(30) NOT NULL,
  `images` varchar(100) DEFAULT 'default-image.png',
  `price` decimal(10,0) NOT NULL,
  `categoryId` int(11) unsigned NOT NULL,
  `brand_id` int(11) unsigned NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkIdx_100` (`brand_id`),
  KEY `fkIdx_90` (`categoryId`),
  CONSTRAINT `FK_88` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_98` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'AU-MDRZ150','Auriculares sony con alcance inalámbrico de 10 m. La batería dura 35 h. Modo manos libres incluido. Con micrófono incorporado. Sonido superior y sin límites. Cómodos y prácticos.','Negro y Rojo','default-image.png',9500,1,2,'2020-10-11 07:47:30','2021-09-30 19:57:57'),(2,'TC-RGB-100','HyperX sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductore','RGB','default-image.png',8000,2,2,'2020-11-22 09:27:28','2021-05-14 22:19:10'),(3,'TCM-G413',' El teclado mecánico para gaming G413 ofrece rendimiento sin igual con tecnologías y funciones avanzadas. Con interruptores Romer-G™ Tactile, usados por los Profesionales de eSports en todo el mundo, el G413 Proporciona velocidad, respuesta y resistencia únicas en su género.','RGB','default-image.png',8700,3,3,'2020-10-02 15:28:38','2021-05-07 02:24:52'),(4,'Playstation 1','asdadasdasddfgdhdhfghh','black','default-image.png',165151,1,1,'2021-09-29 03:11:12','2021-09-29 03:11:12'),(5,'Playstation 1','asdadasdasddfgdhdhfghh','black','default-image.png',165151,1,1,'2021-09-29 03:11:18','2021-09-29 03:11:18'),(7,'Playstation 1','weffjlkgkjkgghkgkkkkggggggggggggggg','rynsryn','default-image.png',574252,1,1,'2021-09-29 14:21:22','2021-09-29 14:21:22'),(8,'Playstation 1','weffjlkgkjkgghkgkkkkggggggggggggggg','black','default-image.png',1651,1,1,'2021-09-29 14:22:41','2021-09-29 14:22:41'),(9,'AU-MDZ-150','weffjlkgkjkgghkgkkkkggggggggggggggg','rojo','default-image.png',125151,1,1,'2021-09-29 14:26:42','2021-09-29 19:46:07'),(11,'Mouse','mouseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee','RGB','1632941544805_img_.png',9000,3,3,'2021-09-29 15:06:41','2021-09-29 20:14:58');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `image` varchar(100) DEFAULT 'default.png',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `user_rol` int(1) NOT NULL DEFAULT 0,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Gale','Meneghelli','gmeneghelli3@weibo.com','G4gsl9UEi','default.png','2021-03-23 07:40:01','2021-07-15 19:33:22',0,'+86 189 929 3571'),(5,'Leesa','Halfhyde','lhalfhyde4@over-blog.com','SMnerTo','default.png','2021-06-21 01:31:43','2020-11-21 16:31:19',0,'+86 481 126 2813'),(6,'Danya','Duckels','dduckels5@forbes.com','Y0gZxB','default.png','2021-03-27 12:54:59','2021-03-23 10:51:30',0,'+86 427 216 8059'),(7,'Jaime','Posselow','jposselow6@barnesandnoble.com','yW03z34Bzd','default.png','2020-10-10 16:38:09','2021-04-10 05:30:31',0,'+234 116 825 7865'),(8,'Roda','Hawsby','rhawsby7@live.com','XVMOnAnNG','default.png','2021-03-14 02:59:18','2020-10-26 13:33:42',0,'+95 420 718 3181'),(9,'Paulie','Roads','proads8@mysql.com','Dl1IWOl','default.png','2020-11-25 19:53:24','2021-09-04 16:49:14',0,'+30 352 248 5208'),(10,'Francesco','Kuhl','fkuhl9@tuttocitta.it','eEVeVtEw8bOt','default.png','2021-09-13 07:43:39','2021-01-14 05:49:56',0,'+93 522 905 4341'),(12,'fran','fernandez','homer_JS@gmail.com','$2a$10$0Ov9gZNd8cbNF3vkqIF5x.PiWmE2YCVBa60y7spxMANQLGo1chcLG','default.png','2021-09-24 03:27:30','2021-09-24 03:27:30',0,''),(15,'Franco','Fernandez','admin@admin.com','$2a$10$sQIO7DUiCAo1m6M9dkGzK.w.uO6YgVfjaimvcNj9UqENPmgqKmZ9q','1633029116038_img_.jpg','2021-09-30 18:58:12','2021-09-30 19:11:56',1,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'neotech'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-30 17:06:29
