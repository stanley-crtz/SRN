-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 15-08-2021 a las 22:17:10
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `School`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AcademicNotes`
--

CREATE TABLE `AcademicNotes` (
  `idNotes` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idCourses` int(11) NOT NULL,
  `Date` year(4) NOT NULL,
  `C1_L1` decimal(10,2) NOT NULL,
  `C1_L2` decimal(10,2) NOT NULL,
  `C1_P` decimal(10,2) NOT NULL,
  `C1_Note` decimal(10,2) NOT NULL,
  `C2_L1` decimal(10,2) NOT NULL,
  `C2_L2` decimal(10,2) NOT NULL,
  `C2_P` decimal(10,2) NOT NULL,
  `C2_Note` decimal(10,2) NOT NULL,
  `C3_L1` decimal(10,2) NOT NULL,
  `C3_L2` decimal(10,2) NOT NULL,
  `C3_P` decimal(10,2) NOT NULL,
  `C3_Note` decimal(10,2) NOT NULL,
  `Rep` decimal(10,2) NOT NULL,
  `Final` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Courses`
--

CREATE TABLE `Courses` (
  `idCourses` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Acronym` varchar(100) NOT NULL,
  `Code` varchar(100) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `Active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TypeUsers`
--

CREATE TABLE `TypeUsers` (
  `idTypeUser` int(11) NOT NULL,
  `TypeUser` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `TypeUsers`
--

INSERT INTO `TypeUsers` (`idTypeUser`, `TypeUser`) VALUES
(1, 'Management'),
(2, 'Teacher'),
(3, 'Student');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `idUser` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `DUI` varchar(10) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `idTypeUser` int(11) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Phone` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Users`
--

INSERT INTO `Users` (`idUser`, `Name`, `Address`, `DUI`, `Email`, `idTypeUser`, `Password`, `Phone`) VALUES
(1, 'Administrador', 'Berlin, Usulutan', '12345678-9', 'admin@gmail.com', 1, '123456', '7548-8956');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `AcademicNotes`
--
ALTER TABLE `AcademicNotes`
  ADD PRIMARY KEY (`idNotes`);

--
-- Indices de la tabla `Courses`
--
ALTER TABLE `Courses`
  ADD PRIMARY KEY (`idCourses`);

--
-- Indices de la tabla `TypeUsers`
--
ALTER TABLE `TypeUsers`
  ADD PRIMARY KEY (`idTypeUser`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `AcademicNotes`
--
ALTER TABLE `AcademicNotes`
  MODIFY `idNotes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `Courses`
--
ALTER TABLE `Courses`
  MODIFY `idCourses` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `TypeUsers`
--
ALTER TABLE `TypeUsers`
  MODIFY `idTypeUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
