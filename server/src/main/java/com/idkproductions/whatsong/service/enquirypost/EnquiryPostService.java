package com.idkproductions.whatsong.service.enquirypost;

import com.idkproductions.whatsong.dto.enquirypost.EnquiryPostDto;
import com.idkproductions.whatsong.request.EnquiryPostRequest;
import com.idkproductions.whatsong.type.SortType;

import java.util.List;

public interface EnquiryPostService {

    /**
     * Get a list enquiry posts
     *
     * @param limit
     * @param offset
     * @param sortType
     * @return {@link List} list of posts
     */
    List<EnquiryPostDto> getPosts(int limit, int offset, SortType sortType);

    /**
     * Submit a new enquiry post
     *
     * @param {@link EnquiryPostRequest} submission
     */
    EnquiryPostDto submitPost(EnquiryPostRequest submission);
}
