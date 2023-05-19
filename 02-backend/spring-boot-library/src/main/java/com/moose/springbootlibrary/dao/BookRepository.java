package com.moose.springbootlibrary.dao;


import com.moose.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository <Book, Long> {
}
