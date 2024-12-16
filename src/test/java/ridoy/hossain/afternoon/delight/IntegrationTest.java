package ridoy.hossain.afternoon.delight;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import ridoy.hossain.afternoon.delight.config.AsyncSyncConfiguration;
import ridoy.hossain.afternoon.delight.config.EmbeddedRedis;
import ridoy.hossain.afternoon.delight.config.EmbeddedSQL;
import ridoy.hossain.afternoon.delight.config.JacksonConfiguration;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { AfternoonDelightApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedRedis
@EmbeddedSQL
public @interface IntegrationTest {
}
