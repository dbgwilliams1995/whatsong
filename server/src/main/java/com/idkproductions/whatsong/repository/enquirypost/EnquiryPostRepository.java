package com.idkproductions.whatsong.repository.enquirypost;

import com.idkproductions.whatsong.model.EnquiryPost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnquiryPostRepository extends CrudRepository<EnquiryPost, Long> {
}
