package com.chatGPT.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chatGPT.model.ApiKey;

public interface ApiKeyRepo extends JpaRepository<ApiKey, Integer> {

	

	
}
