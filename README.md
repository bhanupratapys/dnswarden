# dnswarden
### Just a normal privacy oriented dns service with a ability to block ads , trackers and also provides uncensored dns! Servers are hosted in Germany



## Features

* Provides two types of dns 
  * **Pure uncensored dns** (Blocks nothings , more power for the user!)
  * **Adblocking dns** (Blocks ads , trackers and all the random crap on the internet. If your favourite website gets blocked/broken , **[report here!](https://github.com/dnswarden/blocklist)**
    * Supports DNSCrypt , DNS over HTTPS , DNS over TLS and Normal DNS (plaintext/cleartext).
    * DNSSEC and [QNAME minimization](https://tools.ietf.org/html/rfc7816) are enabled by default.
    * Supports OpenNIC TLD's.
    * EDNS Client Subnet ([ECS](https://tools.ietf.org/html/rfc7871)) is disabled.
    * No query logging .
    
    
    
 # Server information
 
* ## Adblocking DNS (DoT, DoH, DnsCryptV2, Normal DNS)
  
    * ### Normal DNS
      *  IPv4: 116.203.70.156, 116.203.35.255 ( Only on PORT **53***)
      *  IPv6: 2a01:4f8:1c1c:5e77::1 , 2a01:4f8:1c1c:75b4::1 ( Only on PORT **53***)
  
  * ### DNS-over-TLS
     *  adblock-dot.dnswarden.com ( Supports both port **853** and **443**)
  
  * ### DNS-over-HTTPS: 
    *  https://doh.dnswarden.com/adblock
    
  * ### DnsCryptV2
      * IPv4
        * sdns://
        
        
       * IPv6
         * sdns://
       
       
* ## Uncensored DNS (DoT, DoH, DnsCryptV2, Normal DNS)
  
    * ### Normal DNS
      *  IPv4: 116.203.70.156, 116.203.35.255 ( Only on PORT **5353***)
      *  IPv6: 2a01:4f8:1c1c:5e77::1 , 2a01:4f8:1c1c:75b4::1 ( Only on PORT **5353***)
  
  * ### DNS-over-TLS
     *  uncensored-dot.dnswarden.com ( Supports both port **853** and **443**)
  
  * ### DNS-over-HTTPS: 
    *  https://doh.dnswarden.com/uncensored
    
  * ### DnsCryptV2

      * IPv4
        * sdns://
        
        
       * IPv6
         * sdns://
       
       
       
       
* ## Privacy policy and T&C
  * Use at your own risk. I will not be held responsible for any downtime of the servers , only on a "best effort" basis.
  * No query logging . Completely disabled query logs related to the DNS traffic.




* ### Health/Dns Query Rate Graph
    * Will be live at [soon here](https://dnswarden.com/health).
    
    
    
    
* ### Client software

    * Android
      * [Nebulo](https://git.frostnerd.com/PublicAndroidApps/smokescreen#installation), Supports both DoT and DoH.
      * [PersonalDnsFilter](https://zenz-solutions.de/personaldnsfilter), Supports DoT , DoH and normal DNS.
      * [Intra](https://play.google.com/store/apps/details?id=app.intra), Supports only DoH.
      * [Dnscrypt-proxy](https://github.com/jedisct1/dnscrypt-proxy), Supports dnscrypt and DoH.
      * By using Android Pie , Go to Setting -> Wi-Fi -> Private DNS and enter the hostname. Supports only DoT.
      
     
    * For other OS's
       * [Knot-resolver](https://www.knot-resolver.cz).
       * [Unbound](https://nlnetlabs.nl/projects/unbound/about).
       * [Stubby](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Daemon+-+Stubby).
       * [m13253's DoH](https://github.com/m13253/dns-over-https).
