package com.moose.springbootlibrary.config;

import com.moose.springbootlibrary.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private String theAllowedOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        // gather all http request we want to disable in one array
        HttpMethod[] theUnsupportedActions = {
                HttpMethod.POST,
                HttpMethod.PATCH,
                HttpMethod.DELETE,
                HttpMethod.PUT
        };

        config.exposeIdsFor(Book.class); // expose all /books/{id} entities
        
        disableHttpMethods(Book.class, config, theUnsupportedActions); // custom method where we implement HTTP methods we want to disable for Book entity

        /* Configure CORS Mapping (cross-origin-resource-sharing) */
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(theAllowedOrigins);
    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {

        config.getExposureConfiguration()
                .forDomainType(bookClass)
                .withItemExposure((metdata, httpMethods) -> // method disables the specified HTTP methods for individual item endpoints (e.g., "/books/{id}"). In this case, the theUnsupportedActions array is passed to disable those methods.
                        httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure(((metdata, httpMethods) ->
                        httpMethods.disable(theUnsupportedActions)));
    }

    /*
    * disable the option for POST, PUT, DELETE, PATCH request calls for path /books
    * */

}
