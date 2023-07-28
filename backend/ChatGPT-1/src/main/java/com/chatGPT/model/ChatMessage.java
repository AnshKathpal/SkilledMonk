package com.chatGPT.model;

import java.util.List;

import lombok.Data;

@Data
public class ChatMessage {
	
	private List<com.theokanning.openai.completion.chat.ChatMessage> messages;

}
