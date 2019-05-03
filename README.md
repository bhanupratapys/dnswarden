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
        * sdns://AQMAAAAAAAAAEzExNi4yMDMuNzAuMTU2OjQ0NDMgL7bVxErUNqJptE9JaRqkjEpf_XAZN6C2ESmr9Jv7ScAjMi5kbnNjcnlwdC1jZXJ0LmRuc3dhcmRlbi0xLWFkYmxvY2s
        * sdns://AQMAAAAAAAAAEzExNi4yMDMuMzUuMjU1OjQ0NDMg8_tThCXwN1_HBlWh7qb9nqA_9FLLgsy6UqH31heo_dAjMi5kbnNjcnlwdC1jZXJ0LmRuc3dhcmRlbi0yLWFkYmxvY2s
        
       * IPv6
       
       
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
        * sdns://AQcAAAAAAAAAEzExNi4yMDMuNzAuMTU2Ojg0NDMgL7bVxErUNqJptE9JaRqkjEpf_XAZN6C2ESmr9Jv7ScAkMi5kbnNjcnlwdC1jZXJ0LmRuc3dhcmRlbi0xLXVuY2Vuc29y
        * sdns://AQcAAAAAAAAAEzExNi4yMDMuMzUuMjU1Ojg0NDMg8_tThCXwN1_HBlWh7qb9nqA_9FLLgsy6UqH31heo_dAkMi5kbnNjcnlwdC1jZXJ0LmRuc3dhcmRlbi0yLXVuY2Vuc29y
        
       * IPv6
       
       
       
       
* ## Privacy policy and T&C
  * Use at your own risk. I will not be held responsible for any downtime of the servers , only on a "best effort" basis.
  * No query logging . Completely disabled query logs related to the DNS traffic.
