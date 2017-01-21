<?
	page::$methods['hasCover']= function( $page ){
    return $page->content()->has('cover') ? $page->cover()->toFile() : false;
		};