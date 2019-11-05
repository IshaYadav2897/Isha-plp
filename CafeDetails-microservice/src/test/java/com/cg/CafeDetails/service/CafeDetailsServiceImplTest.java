package com.cg.CafeDetails.service;

import static org.junit.Assert.*;

import java.util.NoSuchElementException;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.CafeDetails.dto.CafeDetails;
import com.cg.CafeDetails.exception.CafeDetailsNotFoundException;

@RunWith(SpringRunner.class)
@SpringBootTest()
public class CafeDetailsServiceImplTest {

	@Autowired
	private CafeDetailsService service;
	
	@Test
	public void contextLoads() {
		assertNotNull(service);
	}
	
	@Before
	public void init() {
		
	}
	
	@Test
	public void testAddCafeDetails() {
		fail("Not yet implemented");
	}

	@Test
	public void testFetchCafeDetailsById() throws CafeDetailsNotFoundException {
		CafeDetails cafe = service.fetchCafeDetailsById(500);
		assertEquals(500, cafe.getCafeId());
		assertEquals("MunchBox", cafe.getCafeName());
		assertEquals("Malad", cafe.getCafeLocation());
		assertEquals("Aditi", cafe.getCafeOwner());
//		assertNotNull(service.fetchCafeDetailsById(500));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testFetchCafeDetailsByIdWithWrongId() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsById(506));
	}
	

	@Test
	public void testFetchAllCafeDetails() {
		assertEquals(5, service.fetchAllCafeDetails().size());
	}
	
	@Test(expected = AssertionError.class)
	public void testFetchAllCafeDetailsWithWrongData() {
		assertEquals(6, service.fetchAllCafeDetails().size());
	}

	@Test
	public void testRemoveCafeDetails() throws CafeDetailsNotFoundException {
		assertTrue(service.removeCafeDetails(504));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testRemoveCafeDetailsWithWrongId() throws CafeDetailsNotFoundException {
		assertTrue(service.removeCafeDetails(504));
	}

	@Test
	public void testUpdateCafeDetails() {
		fail("Not yet implemented");
	}

//	@Test
//	public void testAddCafeMenu() {
//		fail("Not yet implemented");
//	}

	@Test
	public void testFetchCafeMenuById() {
		assertNotNull(service.fetchCafeMenuById(1));
	}
	
	@Test(expected = NoSuchElementException.class)
	public void testFetchCafeMenuByIdWithWrongId() {
		assertNotNull(service.fetchCafeMenuById(10));
	}

	@Test
	public void testFetchAllCafeMenu() {
		assertEquals(7, service.fetchAllCafeMenu().size());
	}

	@Test(expected = AssertionError.class)
	public void testFetchAllCafeMenuWithWrongData() {
		assertEquals(10, service.fetchAllCafeMenu().size());
	}
	
//	@Test
//	public void testRemoveCafeMenu() {
//		fail("Not yet implemented");
//	}
//
//	@Test
//	public void testUpdateCafeMenu() {
//		fail("Not yet implemented");
//	}

	@Test
	public void testFetchCafeDetailsByName() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByName("Felicita"));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testFetchCafeDetailsByNameWithWrongName() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByName("Star"));
	}

	@Test
	public void testFetchCafeDetailsByLocation() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByLocation("Malad"));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testFetchCafeDetailsByLocationWithWrongLocation() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByLocation("Churchgate"));
	}

	@Test
	public void testFetchCafeDetailsByOwner() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByOwner("Sachin"));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testFetchCafeDetailsByOwnerWithWrongOwner() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByOwner("Rachel"));
	}

	@Test
	public void testFetchCafeDetailsByRating() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByRating(4.8));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testFetchCafeDetailsByRatingWithWrongRating() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByRating(3.6));
	}

	@Test
	public void testFetchCafeDetailsByRatingRange() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByRatingRange(2.0, 4.8));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testFetchCafeDetailsByRatingRangeWithWrongRatingRange() throws CafeDetailsNotFoundException {
		assertNotNull(service.fetchCafeDetailsByRatingRange(2.0, 2.4));
	}

	@Test
	public void testUpdateCafeName() throws CafeDetailsNotFoundException {
		assertEquals(1, service.updateCafeName("DiBella", 503));
	}
	
	@Test(expected = CafeDetailsNotFoundException.class)
	public void testUpdateCafeNameWithWrongId() throws CafeDetailsNotFoundException {
		assertEquals(0, service.updateCafeName("DiBella", 504));
	}


}
