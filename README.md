# Notice

## Project is live for public usage.




#### Just a normal privacy oriented dns service with a ability to block ads , trackers and also provides uncensored dns! 



## Features

* Provides multiple types of dns 
  * **Pure uncensored dns** (Blocks nothings , more power for the user!)
  * **Adblocking dns** (Blocks ads , trackers and all the random crap on the internet.)
  * **Adult Filter dns** ( Blocks adult content, enforces force safe search for search engines and youtube. Also blocks ads,trackers and other malicious stuff)
  * **Custom filter dns** ( Users can choose multiple blocklists from the predefined set depending on their usage. Only supports DNS-over-TLS and DNS-over-HTTPS)
  

    * Supports DNSCrypt , DNS over HTTPS and DNS over TLS .
    * DNSSEC and [QNAME minimization](https://tools.ietf.org/html/rfc7816) are enabled by default.
    * Supports other [non-icann TLD's](https://github.com/bhanupratapys/dnswarden/issues/7#issuecomment-548266343).
    * EDNS Client Subnet ([ECS](https://tools.ietf.org/html/rfc7871)) is disabled .
    * No query logging .
    * If your favourite website gets blocked/broken , report **[ here](https://github.com/dnswarden/blocklist-staging)** or **[ here](https://t.me/dnswarden)** or **[ here](mailto:dns-support@dnswarden.com)**. No support will be given to custom filter dns when it is implemented for broken/blocked sites. Users will have to choose the blocklist appropriately. 
    
    
 # Server information
 
* ## Adblocking DNS (DoT, DoH, DnsCryptV2)
  
  
  * ### DNS-over-TLS
     *  adblockdot.asia.dnswarden.com
     *  adblockdot.eu.dnswarden.com
     *  adblockdot.us.dnswarden.com
  
  * ### DNS-over-HTTPS: 
    *  https://doh.asia.dnswarden.com/adblock
    *  https://doh.eu.dnswarden.com/adblock
    *  https://doh.us.dnswarden.com/adblock

	DNS-over-HTTPS stamps for [Asian server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/adblock/Singapore.md), [European server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/adblock/Germany.md) and [North American server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/adblock/USA.md). 
    
  * ### DnsCrypt
      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/adblock/Singapore.md) for Asian server which is hosted in Singapore. 

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/adblock/Germany.md) for European server which is hosted in Germany. 

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/adblock/USA.md) for North American server which is hosted in Dallas, USA. 
         
         
   


   

       
* ## Uncensored DNS (DoT, DoH, DnsCryptV2)
  
  
  * ### DNS-over-TLS
     *  uncensoreddot.asia.dnswarden.com
     *  uncensoreddot.eu.dnswarden.com
     *  uncensoreddot.us.dnswarden.com
  
  * ### DNS-over-HTTPS: 
    *  https://doh.asia.dnswarden.com/uncensored
    *  https://doh.eu.dnswarden.com/uncensored
    *  https://doh.us.dnswarden.com/uncensored

	DNS-over-HTTPS stamps for [Asian server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/uncensored/Singapore.md), [European server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/uncensored/Germany.md) and [North American server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/uncensored/USA.md). 
    
    
  * ### DnsCrypt

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/uncensored/Singapore.md) for Asian server which is hosted in Singapore. 

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/uncensored/Germany.md) for European server which is hosted in Germany. 

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/uncensored/USA.md) for North American server which is hosted in Dallas, USA. 

          

       
       
* ## Adult Filter DNS (DoT, DoH, DnsCryptV2)
  
  
  * ### DNS-over-TLS
     *  adultfilterdot.asia.dnswarden.com
     *  adultfilterdot.eu.dnswarden.com
     *  adultfilterdot.us.dnswarden.com
  
  * ### DNS-over-HTTPS: 
    *  https://doh.asia.dnswarden.com/adultfilter
    *  https://doh.eu.dnswarden.com/adultfilter
    *  https://doh.us.dnswarden.com/adultfilter

	DNS-over-HTTPS stamps for [Asian server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/adultfilter/Singapore.md), [European server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/adultfilter/Germany.md) and [North American server](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DoH/adultfilter/USA.md). 
    
    
  * ### DnsCrypt

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/adultfilter/Singapore.md) for Asian server which is hosted in Singapore. 

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/adultfilter/Germany.md) for European server which is hosted in Germany. 

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/DnsCrypt/adultfilter/USA.md) for North American server which is hosted in Dallas, USA. 



       
* ## Privacy policy and T&C
  * Use at your own risk. I will not be held responsible for any downtime of the servers , only on a "best effort" basis.
  * No query logging . Completely disabled query logs related to the DNS traffic.
  * Dns traffic will be forwarded datacenter's dns servers if the resolver fails. 





* ### Client software

    * Android
      * [Dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy), Supports dnscrypt and DoH. Also supports other os's.
      * [Nebulo](https://git.frostnerd.com/PublicAndroidApps/smokescreen#installation), Supports both DoT and DoH.
      * [PersonalDnsFilter](https://zenz-solutions.de/personaldnsfilter), Supports DoT , DoH and normal DNS.
      * [Intra](https://play.google.com/store/apps/details?id=app.intra), Supports only DoH.
      * By using Android Pie , Go to Setting -> Wi-Fi -> Private DNS and enter the hostname. Supports only DoT.
      
     
    * For other OS's
       * [Knot-resolver](https://www.knot-resolver.cz).
       * [Unbound](https://nlnetlabs.nl/projects/unbound/about).
       * [Stubby](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Daemon+-+Stubby).
       * [m13253's DoH](https://github.com/m13253/dns-over-https).




