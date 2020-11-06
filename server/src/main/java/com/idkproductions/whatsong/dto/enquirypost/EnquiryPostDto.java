package com.idkproductions.whatsong.dto.enquirypost;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

@JsonSerialize
public @Data
class EnquiryPostDto {
    private String id;
    private String description;
}
