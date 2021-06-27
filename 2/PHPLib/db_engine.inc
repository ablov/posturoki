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
    try {
      $this -> conn = new PDO("mysql:host=" . _server . ";dbname=" . _database . ";charset=utf8", _userName, _password);
      $this -> conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // set the PDO error mode to exception
      $this -> conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $PDOException) {
      echo $PDOException ->errorInfo;
    }
  }

  /**
   * return the list of tests
   * @return array - list of tests
   */
  function getListOfTests(bool $onlyActive = false): array
  {
    $sql = "SELECT ID, Title, IsCorrect, IsActive FROM tests";
    if ($onlyActive) {
      $sql .= " WHERE IsActive = 1";
    }
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
    $sql = "SELECT * FROM tests WHERE ID = $ID";
    try {
      $result = $this->conn->query($sql);
    } catch (PDOException $PDOException) {
      echo $PDOException ->errorInfo;
      return null;
    }
    return $result->fetch();
  }

  /**
   * Adds the new test to database
   * @param $title string
   * @param $test string
   * @param string $keyText
   * @return int record ID
   */
  function createNewTest(string $title, string $task, string $test, string $keyText): int
  {
    $sql = "INSERT INTO tests (Title, Task, Test, KeyText, Status) VALUES (:title, :task, :test, :key_text, 'Новый')";
    try {
      $sth = $this->conn->prepare($sql);
      $result = $sth->execute(array(
        ':title' => $title,
        ':task' => $task,
        ':test' => $test,
        ':key_text' => $keyText,
      ));
      if ($result == 1)
        return $this->conn->lastInsertId();
      else
        return false;
    } catch (PDOException $PDOException) {
      return false;
    }
  }

  /**
   * Complete the test to database
   * @param int $ID
   * @param string $resultHTML
   * @param $keys string
   * @return bool true if success
   */
  function completeTheTest(int $ID, string $resultHTML, string $keys): bool
  {
    $sql = "UPDATE tests SET ResultHTML = :result_html, KeysSet = :keys, IsCorrect = 1, Status = 'Опубликован', IsActive = 1 WHERE ID = $ID";
    try {
      $sth = $this->conn->prepare($sql);
      $result = $sth->execute(array(
        ':result_html' => $resultHTML,
        ':keys' => $keys,
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
   * Update the record in database
   * @param int $ID
   * @param string $Title
   * @param string $ResultHTML
   * @param string $KeysSet
   * @param string $Test
   * @param string $KeyText
   * @param bool $IsCorrect
   * @param string $Status
   * @param bool $IsActive
   * @return bool
   */
  function updateTestFull(int $ID, string $Title, string $ResultHTML, string $KeysSet, string $Test, string $KeyText,
                          bool $IsCorrect, string $Status, bool $IsActive, int $TestIndex, int $KeyIndex): bool
  {
    $sql = "UPDATE tests
      SET Title = :title, 
      ResultHTML = :result_html, 
      KeysSet = :keys_set,
      Test = :test,
      KeyText = :key_text,
      IsCorrect = :is_correct,
      Status = :status, 
      IsActive = :is_active,
      LastTestIndex = :last_test_index,
      LastKeyIndex = :last_key_index    
      WHERE ID = $ID";
    try {
      $sth = $this->conn->prepare($sql);
      $result = $sth->execute(array(
        ':title' => $Title,
        ':result_html' => $ResultHTML,
        ':keys_set' => $KeysSet,
        ':test' => $Test,
        ':key_text' => $KeyText,
        ':is_correct' => $IsCorrect ? 1 : 0,
        ':status' => $Status,
        ':is_active' => $IsActive ? 1 : 0,
        ':last_test_index' => $TestIndex,
        ':last_key_index' => $KeyIndex
      ));
      if ($result == 1)
        return true;
      else
        return false;
    } catch (PDOException $PDOException) {
      return false;
    }
  }

  function editTest($ID, $title, $task, $test, $keys): bool
  {
    $sql = "UPDATE tests SET Title = :title, Task = :task, Test = :test, KeysSet = :keyText WHERE ID = '$ID'";
    try {
      $sth = $this->conn->prepare($sql);
      $result = $sth->execute(array(
        ':title' => $title,
        ':task' => $task,
        ':test' => $test,
        ':keyText' => $keys
      ));
      if ($result == 1)
        return true;
      else
        return false;
    } catch (PDOException $PDOException) {
      return false;
    }
  }

  function toggleTest(int $ID): bool
  {
    try {
      $sql = "SELECT IsActive FROM tests WHERE ID = $ID";
      $result = $this->conn->query($sql);
      $rows = $result->fetch();
      $state = $rows['IsActive'];
      $state ? $state = 0 : $state = 1; // we shouldn't use 'true'/'false' with MySQL, use 1/0 instead
      $sql = "UPDATE tests SET IsActive = $state WHERE ID = $ID";
      $this->conn->exec($sql);
      return true;
    } catch (PDOException $PDOException) {
      return false;
    }
  }

  /**
   * Delete test from table
   * @param $ID - record ID
   * @return bool - true if success
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
