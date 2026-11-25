<?php
/**
 * Auto Glance Block theme setup.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AUTOGLANCE_VERSION', '2.0.0' );

function autoglance_fonts_url() {
	return 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap';
}

function autoglance_setup() {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );
	add_editor_style( array( autoglance_fonts_url(), 'assets/css/main.css', 'assets/css/block-fixes.css' ) );
}
add_action( 'after_setup_theme', 'autoglance_setup' );

function autoglance_assets() {
	wp_enqueue_style( 'autoglance-fonts', autoglance_fonts_url(), array(), null );
	wp_enqueue_style( 'autoglance-main', get_theme_file_uri( 'assets/css/main.css' ), array( 'autoglance-fonts' ), AUTOGLANCE_VERSION );
	wp_enqueue_style( 'autoglance-block-fixes', get_theme_file_uri( 'assets/css/block-fixes.css' ), array( 'autoglance-main' ), AUTOGLANCE_VERSION );
	wp_enqueue_script( 'autoglance-main', get_theme_file_uri( 'assets/js/main.js' ), array(), AUTOGLANCE_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'autoglance_assets' );

function autoglance_pattern_category() {
	register_block_pattern_category( 'autoglance', array( 'label' => __( 'Auto Glance', 'autoglance-block' ) ) );
}
add_action( 'init', 'autoglance_pattern_category' );

/**
 * Booking form: prepares the booking and opens WhatsApp (see assets/js/main.js).
 */
function autoglance_booking_shortcode( $atts ) {
	$atts    = shortcode_atts( array( 'variant' => 'full' ), $atts );
	$compact = 'compact' === $atts['variant'];
	$types   = array( 'Car', 'SUV', 'Van', 'Motorbike', 'Other' );
	$svcs    = array( 'Car Wash & Foam Bath', '3M Window Tinting', 'Mechanical Service', 'Paint Correction & Ceramic', 'Interior Deep Clean' );
	ob_start(); ?>
	<form class="booking-form<?php echo $compact ? ' is-compact' : ''; ?>" id="ag-booking-form<?php echo $compact ? '-compact' : ''; ?>" data-ag-booking>
	  <div class="form-grid">
		<label>Full Name<input name="name" required placeholder="Your name"></label>
		<label>Phone / WhatsApp<input name="phone" required type="tel" placeholder="07X XXX XXXX"></label>
		<?php if ( ! $compact ) : ?>
		<label>Vehicle Number<input name="vehicle_number" placeholder="e.g. CAB-1234"></label>
		<?php endif; ?>
		<label>Vehicle Type<select name="vehicle_type"><option value="">Select vehicle type</option>
		<?php foreach ( $types as $t ) { printf( '<option>%s</option>', esc_html( $t ) ); } ?>
		</select></label>
	  </div>
	  <?php if ( $compact ) : ?>
	  <label>Service<select name="services[]"><option value="">Select a service</option>
		<?php foreach ( $svcs as $s ) { printf( '<option>%s</option>', esc_html( $s ) ); } ?>
	  </select></label>
	  <label>Preferred Date<input name="date" type="date"></label>
	  <?php else : ?>
	  <fieldset><legend>Select Services (choose one or more)</legend>
		<div class="service-options">
		  <?php foreach ( $svcs as $service ) : ?>
		  <label class="check-option"><input type="checkbox" name="services[]" value="<?php echo esc_attr( $service ); ?>"><span><?php echo esc_html( $service ); ?></span></label>
		  <?php endforeach; ?>
		</div>
	  </fieldset>
	  <div class="form-grid">
		<label>Preferred Date<input name="date" type="date"></label>
		<label>Preferred Time<select name="time"><option value="">Select time (8:00 AM – 6:30 PM)</option>
		<?php
		for ( $h = 8; $h <= 18; $h++ ) {
			foreach ( array( '00', '30' ) as $m ) {
				if ( 18 === $h && '30' === $m ) {
					continue;
				}
				printf( '<option>%s</option>', esc_html( sprintf( '%02d:%s', $h, $m ) ) );
			}
		}
		?>
		</select></label>
	  </div>
	  <label>Notes (optional)<textarea name="notes" rows="4" placeholder="Tell us about your car or any special requests…"></textarea></label>
	  <?php endif; ?>
	  <button class="btn btn-primary btn-wide" type="submit">Confirm Booking <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></button>
	  <p class="form-note">We will never share your details. Expect a confirmation within a few hours.</p>
	  <p class="form-feedback" aria-live="polite"></p>
	</form>
	<?php
	return ob_get_clean();
}
add_shortcode( 'autoglance_booking', 'autoglance_booking_shortcode' );
