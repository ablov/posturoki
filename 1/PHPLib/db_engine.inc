<?php

// Working with database
// The following constants is private and defined in file 'Private/connect.inc'
// _server
// _database
// _userName
// _password
include "Private/connect.inc";

class db_engine
{
  private $conn;
  /**
   * Open connection to database
   */
  function __construct()
  {
    $this -> conn = new PDO("mysql:host=" . _server . ";dbname=" . _database . ";charset=utf8", _userName, _password);
    $this -> conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // set the PDO error mode to exception
    $this -> conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
  }

  /**
   * return the list of tests
   * @return array - list of tests
   */
  function getListOfTests(): array
  {
    $sql = "SELECT ID, Title FROM tests";
    $result = null;
    try {
      $result = $this->conn->query($sql);
    } catch (PDOException $PDOException) {
      echo $PDOException->errorInfo;
    }
    return $result->fetchAll();
  }

  /**
   * @param $ID - unique TestID
   * @return mixed - requested test
   */
  function getTheTest($ID) {
    $sql = "SELECT Title, Test, KeyText FROM tests WHERE ID = $ID";
    $result = null;
    try {
      $result = $this->conn->query($sql);
    } catch (PDOException $PDOException) {
      echo $PDOException ->errorInfo;
    }
    return $result->fetch();
  }

  /**
   * Adds the new test to database
   * @param $title string
   * @param $test string
   * @param $keyText string
   * @return bool true if success
   */
  function addNewTest(string $title, string $test, string $keyText): bool
  {
    $sql = "INSERT INTO tests (Title, Test, KeyText) VALUES (:title, :test, :keyText)";
    try {
      $sth = $this->conn->prepare($sql);
      $result = $sth->execute(array(
        ':title' => $title,
        ':test' => $test,
        ':keyText' => $keyText
      ));
      if ($result == 1)
        return true;
      else
        return false;
    } catch (PDOException $PDOException) {
      return false;
    }
  }

  function editTest($ID, $title, $test, $keyText): bool
  {
    $sql = "UPDATE tests SET Title = :title, Test = :test, KeyText = :keyText WHERE ID = '$ID'";
    try {
      $sth = $this->conn->prepare($sql);
      $result = $sth->execute(array(
        ':title' => $title,
        ':test' => $test,
        ':keyText' => $keyText
      ));
      if ($result == 1)
        return true;
      else
        return false;
    } catch (PDOException $PDOException) {
      return false;
    }
  }

  /**
   * Delete test from table
   * @param $ID - record ID
   * @return bool - terue if success
   */
  function removeTest($ID): bool
  {
    $sql = "DELETE FROM tests WHERE ID = '$ID'";
    try {
      $this->conn->exec($sql);
      return true;
    } catch (PDOException $PDOException) {
      return false;
    }
  }
}
