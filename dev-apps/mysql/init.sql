CREATE DATABASE  IF NOT EXISTS `servers` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `servers`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: servers
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
-- Table structure for table `servers_companies`
--

DROP TABLE IF EXISTS `servers_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servers_companies` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(45) NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servers_companies`
--

LOCK TABLES `servers_companies` WRITE;
/*!40000 ALTER TABLE `servers_companies` DISABLE KEYS */;
INSERT INTO `servers_companies` VALUES (1,'Microsoft'),(2,'IBM'),(3,'GoDaddy'),(4,'DigitalO');
/*!40000 ALTER TABLE `servers_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servers_table`
--

DROP TABLE IF EXISTS `servers_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servers_table` (
  `server_id` int NOT NULL AUTO_INCREMENT,
  `server_name` varchar(45) NOT NULL,
  `server_ip` varchar(45) NOT NULL,
  `server_company_id` int NOT NULL,
  `server_status` tinyint(1) NOT NULL,
  `server_created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`server_id`),
  KEY `server_company_name_idx` (`server_company_id`),
  CONSTRAINT `server_company_name` FOREIGN KEY (`server_company_id`) REFERENCES `servers_companies` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servers_table`
--

LOCK TABLES `servers_table` WRITE;
/*!40000 ALTER TABLE `servers_table` DISABLE KEYS */;
INSERT INTO `servers_table` VALUES (1,'poolGame','166.11.123.11',1,0,'2022-06-09 17:44:20'),(2,'poolWebsite','146.22.123.11',2,0,'2022-06-09 19:46:06'),(3,'gamesWebsite','116.321.123.31',1,1,'2022-06-09 16:46:06'),(4,'pockerWebsite','116.35.143.11',3,0,'2022-06-09 20:46:06');
/*!40000 ALTER TABLE `servers_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-15 17:37:48
