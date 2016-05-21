package de.simonfront.domain.home;


import de.simonfront.AbstractMvcTest;
import org.springframework.test.web.servlet.MvcResult;
import org.testng.annotations.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.testng.Assert.assertEquals;

@Test(enabled = false)
public class HomeControllerMvcTest extends AbstractMvcTest {

    public void ok() {
        try {
            MvcResult result = mockMvc.perform(get("/home/{name}", "Hans"))
                    .andExpect(status().isOk())
                    .andReturn();
            assertEquals(result.getResponse().getContentAsString(), "hallo mein name ist --> Hans");
        } catch(Exception e) {
            e.printStackTrace();
        }

    }

}