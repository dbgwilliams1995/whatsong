package com.idkproductions.whatsong.controller;

import com.idkproductions.whatsong.dto.enquirypost.EnquiryPostDto;
import com.idkproductions.whatsong.request.EnquiryPostRequest;
import com.idkproductions.whatsong.service.enquirypost.EnquiryPostService;
import com.idkproductions.whatsong.type.SortType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enquiry")
public class EnquiryController {


    @Autowired
    private EnquiryPostService enquiryPostService;

    @GetMapping("/posts")
    public List<EnquiryPostDto> getEnquiryPosts(@RequestParam(value="limit", required=true) final int limit,
                                                @RequestParam(value="offset", required=true)  final int offset,
                                                @RequestParam(value="sort_by", required=true) final SortType sortType) {
        return this.enquiryPostService.getPosts(limit, offset, sortType);
    }

    @GetMapping("/posts/{id}")
    public String getEnquiryPostById(@PathVariable(name = "id", required=true) final String id) {

        return "Hello";
    }

    @PostMapping(path = "/posts", consumes="application/json")
    public EnquiryPostDto submitEnquiryPost(@RequestBody(required = true) EnquiryPostRequest request) {
        return this.enquiryPostService.submitPost(request);
    }
}
