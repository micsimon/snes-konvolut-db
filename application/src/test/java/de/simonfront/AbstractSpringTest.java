package de.simonfront;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.context.web.WebAppConfiguration;

@ContextConfiguration(classes = Main.class)
@WebAppConfiguration
public class AbstractSpringTest extends AbstractTestNGSpringContextTests {
}
