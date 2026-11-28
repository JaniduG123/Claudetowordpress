<?php
/**
 * Title: Gallery – Grid
 * Slug: autoglance/gallery-grid
 * Categories: autoglance
 * Inserter: yes
 */
$cats  = array( 'wash' => 'Car Wash', 'tinting' => '3M Tinting', 'detailing' => 'Detailing' );
$dir   = get_theme_file_path( 'assets/images/gallery/' );
$items = array();
foreach ( (array) glob( $dir . '*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', GLOB_BRACE ) as $f ) {
	$name = basename( $f );
	$cat  = strtok( $name, '-_' );
	$items[] = array(
		'url' => get_theme_file_uri( 'assets/images/gallery/' . rawurlencode( $name ) ),
		'cat' => isset( $cats[ $cat ] ) ? $cat : 'wash',
		'alt' => ucfirst( str_replace( array( '-', '_' ), ' ', pathinfo( $name, PATHINFO_FILENAME ) ) ),
	);
}
?>
<!-- wp:group {"tagName":"section","className":"section gallery-section"} --><section class="wp-block-group section gallery-section">
<!-- wp:group {"className":"container"} --><div class="wp-block-group container">
<!-- wp:html -->
<div class="gallery-filters" role="tablist" aria-label="Gallery categories">
<button type="button" class="g-filter is-active" data-filter="all">All</button>
<?php foreach ( $cats as $k => $label ) : ?>
<button type="button" class="g-filter" data-filter="<?php echo esc_attr( $k ); ?>"><?php echo esc_html( $label ); ?></button>
<?php endforeach; ?>
</div>
<div class="gallery-grid" data-ag-gallery>
<?php if ( $items ) : foreach ( $items as $i ) : ?>
<a class="g-item" href="<?php echo esc_url( $i['url'] ); ?>" data-cat="<?php echo esc_attr( $i['cat'] ); ?>"><img src="<?php echo esc_url( $i['url'] ); ?>" alt="<?php echo esc_attr( $i['alt'] ); ?>" loading="lazy" decoding="async"><span class="g-tag"><?php echo esc_html( $cats[ $i['cat'] ] ); ?></span></a>
<?php endforeach; else :
	$n = 0;
	foreach ( $cats as $k => $label ) :
		for ( $j = 1; $j <= 3; $j++ ) : $n++; ?>
<div class="g-item g-placeholder" data-cat="<?php echo esc_attr( $k ); ?>"><span class="g-ph-label"><?php echo esc_html( $label ); ?> photo <?php echo (int) $j; ?></span><span class="g-tag"><?php echo esc_html( $label ); ?></span></div>
<?php endfor; endforeach; endif; ?>
</div>
<!-- /wp:html -->
</div><!-- /wp:group -->
</section><!-- /wp:group -->
