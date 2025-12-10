import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import styles from './InteractiveMap.module.css';

interface Location {
  id: string;
  city: string;
  country: string;
  company?: string;
  lat: number;
  lng: number;
  address: string[];
  phone: string[];
  mapUrl?: string;
}

interface InteractiveMapProps {
  locations: Location[];
}

const InteractiveMap = ({ locations }: InteractiveMapProps) => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Map View */}
      <div className={styles.desktopMap}>
        <div className={styles.mapContainer}>
          <div className={styles.mapWrapper}>
            <div className={styles.mapOverlay}></div>
            {/* Using a static map image with markers for all locations */}
            <img 
              src={`https://maps.googleapis.com/maps/api/staticmap?center=32,48&zoom=5&size=1200x600&maptype=roadmap&markers=color:blue%7Clabel:B%7C33.3128,44.3615&markers=color:blue%7Clabel:B%7C30.5085,47.7804&markers=color:blue%7Clabel:E%7C36.1901,44.0091&markers=color:blue%7Clabel:E%7C36.2101,44.0291&markers=color:blue%7Clabel:D%7C25.1850,55.2708&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              alt="Office Locations Map"
              className={styles.mapImage}
            />
            
            {/* Floating Location Cards */}
            <div className={styles.floatingCards}>
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`${styles.floatingCard} ${activeLocation === location.id ? styles.active : ''}`}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onClick={() => window.open(location.mapUrl || `https://maps.google.com/?q=${location.lat},${location.lng}`, '_blank')}
                >
                  <div className={styles.cardHeader}>
                    <MapPin className={styles.pinIcon} />
                    <div>
                      <h4>{location.city}</h4>
                      <span className={styles.country}>{location.country}</span>
                    </div>
                  </div>
                  
                  <div className={`${styles.cardDetails} ${activeLocation === location.id ? styles.show : ''}`}>
                    {location.company && (
                      <p className={styles.company}>{location.company}</p>
                    )}
                    <div className={styles.addressLines}>
                      {location.address.slice(0, 3).map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    {location.phone.length > 0 && (
                      <div className={styles.phoneNumbers}>
                        {location.phone.slice(0, 2).map((num, i) => (
                          <span key={i} className={styles.phoneNumber}>
                            <Phone size={12} /> {num}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Location Cards */}
      <div className={styles.mobileCards}>
        {locations.map((location) => (
          <a
            key={location.id}
            href={location.mapUrl || `https://maps.google.com/?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCard}
          >
            <div className={styles.mobileCardHeader}>
              <MapPin className={styles.mobileIcon} />
              <div>
                <h4>{location.city}, {location.country}</h4>
                {location.company && (
                  <p className={styles.mobileCompany}>{location.company}</p>
                )}
              </div>
            </div>
            <div className={styles.mobileCardBody}>
              {location.address.map((line, i) => (
                <p key={i} className={styles.mobileAddress}>{line}</p>
              ))}
              <div className={styles.mobilePhones}>
                {location.phone.map((num, i) => (
                  <span key={i} className={styles.mobilePhone}>
                    <Phone size={14} /> {num}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default InteractiveMap;