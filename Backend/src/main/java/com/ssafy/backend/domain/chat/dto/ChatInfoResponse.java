package com.ssafy.backend.domain.chat.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import com.ssafy.backend.domain.attachedFile.dto.AttachedFileInfo;
import com.ssafy.backend.domain.chat.entity.Chat;
import com.ssafy.backend.domain.chat.entity.ChatRoom;
import com.ssafy.backend.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ChatInfoResponse {
    private Long userId;
    private String content;
    private Long chatNumber;

    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime chatTime;
    private List<AttachedFileInfo> attachedFileInfos;

    public Chat toEntity(User user, ChatRoom chatRoom) {
        return Chat.builder()
                .user(user)
                .chatRoom(chatRoom)
                .content(this.content)
                .chatTime(this.chatTime)
                .chatNumber(this.chatNumber).build();
    }

    public ChatInfoResponse(Long userId, String content, Long chatNumber, LocalDateTime chatTime) {
        this.userId = userId;
        this.content = content;
        this.chatNumber = chatNumber;
        this.chatTime = chatTime;
    }
}
