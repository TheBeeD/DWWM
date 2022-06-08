-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 08 juin 2022 à 08:28
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `poei`
--

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`immatriculation`, `marque`, `model`, `annee`, `nump`) VALUES
(100, 'Peugeot', '5008', 2018, 5),
(200, 'Renault', 'Clio', 2000, 4),
(300, 'Ford', 'Fiesta', 2010, 1),
(400, 'Peugeot', '106', 2002, 3),
(500, 'Citroen', 'C4', 2015, 4),
(600, 'Ford', 'Kuga', 2019, NULL),
(700, 'Fiat', 'Punto', 2008, 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
