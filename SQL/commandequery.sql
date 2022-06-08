-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 08 juin 2022 à 11:28
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
-- Base de données : `madatabase`
--

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `date_achat` date NOT NULL,
  `reference` varchar(255) NOT NULL,
  `cache_prix_total` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `client_id`, `date_achat`, `reference`, `cache_prix_total`) VALUES
(1, 20, '2019-01-01', '004214', 508.63),
(2, 3, '2019-01-03', '007120', 370.7),
(3, 11, '2019-01-04', '002957', 132.37),
(4, 6, '2019-01-07', '003425', 2090.18),
(5, 17, '2019-01-08', '008255', 954.22),
(6, 7, '2019-01-09', '000996', 764.37),
(7, 2, '2019-01-10', '000214', 1111.64),
(8, 7, '2019-01-11', '008084', 1000.08),
(9, 12, '2019-01-11', '009773', 1129.3),
(10, 16, '2019-01-13', '004616', 1063.17),
(11, 4, '2019-01-14', '003757', 97),
(12, 9, '2019-01-15', '004939', 482.45),
(13, 14, '2019-01-16', '003421', 451.94),
(14, 6, '2019-01-16', '002286', 1223.32),
(15, 3, '2019-01-17', '001167', 1646.31),
(16, 15, '2019-01-18', '008974', 136.4),
(17, 9, '2019-01-19', '001369', 1285.81),
(18, 17, '2019-01-20', '009924', 1061.92),
(19, 3, '2019-01-21', '005510', 907.2),
(20, 17, '2019-01-22', '007778', 1169.15),
(21, 17, '2019-01-23', '002359', 510.07),
(22, 15, '2019-01-25', '008459', 1928.59),
(23, 4, '2019-01-27', '005217', 995.76),
(24, 12, '2019-01-29', '000706', 238.99),
(25, 9, '2019-02-01', '007879', 472.82),
(26, 8, '2019-02-02', '007277', 784),
(27, 11, '2019-02-02', '002745', 362.81),
(28, 11, '2019-02-03', '001893', 673.65),
(29, 20, '2019-02-04', '001230', 1255.08),
(30, 10, '2019-02-05', '000469', 114.4),
(31, 7, '2019-02-05', '008653', 751.64),
(32, 3, '2019-02-06', '001858', 700.96),
(33, 14, '2019-02-07', '003330', 441.85),
(34, 2, '2019-02-08', '001074', 810.2),
(35, 5, '2019-02-08', '005379', 93.68),
(36, 16, '2019-02-09', '003672', 554.7),
(37, 10, '2019-02-09', '002220', 185.28),
(38, 19, '2019-02-10', '000086', 567.13),
(39, 8, '2019-02-11', '003770', 1398.06),
(40, 2, '2019-02-12', '008590', 856.14),
(41, 2, '2019-02-12', '001639', 573.02),
(42, 4, '2019-02-13', '002426', 719.54),
(43, 13, '2019-02-14', '007209', 620.68),
(44, 13, '2019-02-15', '008768', 1321.91),
(45, 7, '2019-02-16', '002213', 592.32),
(46, 12, '2019-02-17', '004759', 1518.11),
(47, 19, '2019-02-18', '007155', 611.52),
(48, 2, '2019-02-19', '001496', 2637.18);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
