package com.idkproductions.whatsong.service.enquirypost;

import com.idkproductions.whatsong.dto.enquirypost.EnquiryPostDto;
import com.idkproductions.whatsong.model.EnquiryPost;
import com.idkproductions.whatsong.repository.enquirypost.EnquiryPostRepository;
import com.idkproductions.whatsong.request.EnquiryPostRequest;
import com.idkproductions.whatsong.type.SortType;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultEnquiryPostService implements EnquiryPostService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EnquiryPostRepository enquiryPostRepository;

    @Override
    public List<EnquiryPostDto> getPosts(int limit, int offset, SortType sortType) {
        final Iterable<EnquiryPost> iterableResult = enquiryPostRepository.findAll();

        final List<EnquiryPost> enquiryPosts = new ArrayList<>();
        iterableResult.forEach(enquiryPosts::add);

        return enquiryPosts.stream().map(e -> this.modelMapper.map(e, EnquiryPostDto.class)).collect(Collectors.toList());
    }

    @Override
    public EnquiryPostDto submitPost(EnquiryPostRequest submission) {
         EnquiryPost post = this.modelMapper.map(submission, EnquiryPost.class);

         post = this.enquiryPostRepository.save(post);

         return this.modelMapper.map(post, EnquiryPostDto.class);
    }
}
