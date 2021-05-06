<?php 

function getBrowser() {
    if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false)
        return 'Internet explorer';
    elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Trident') !== false)
        return 'Internet explorer';
    elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== false)
        return 'Mozilla Firefox';
    elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== false)
        return 'Google Chrome';
    elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera Mini') !== false)
        return "Opera Mini";
    elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera') !== false)
        return "Opera";
    elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') !== false)
        return "Safari";
    else
        return 'Other';
}
