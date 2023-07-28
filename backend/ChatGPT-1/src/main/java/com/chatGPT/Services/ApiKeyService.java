package com.chatGPT.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chatGPT.Repository.ApiKeyRepo;
import com.chatGPT.model.ApiKey;

@Service
public class ApiKeyService implements ApiKeyInterface{
	@Autowired
	public ApiKeyRepo apiKeyRepo;

	@Override
	public String addApiKey(String key) {
		// TODO Auto-generated method stub
		ApiKey apiKey = new ApiKey();
        apiKey.setApiKey(key); // Set the apiKey value using the provided key
        apiKeyRepo.save(apiKey);
		return key;
	}
	public String getApiKey(Integer id) {
		ApiKey a = apiKeyRepo.findById(id).get();
		return a.getApiKey();
	}
 
}
